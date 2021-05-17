import { getAllTutorialPreviews } from '@/utils/tutorial/getAllTutorialPreviews'
import { getStaticFileProps } from '@/utils/common/getStaticFileProps'

export async function getStaticProps() {
	return {
		props: {
			tutorials: getStaticFileProps(getAllTutorialPreviews()),
		},
	}
}
