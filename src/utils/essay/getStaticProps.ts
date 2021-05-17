import { getAllEssayPreviews } from '@/utils/essay/getAllEssayPreviews'
import { getStaticFileProps } from '@/utils/common/getStaticFileProps'

export async function getStaticProps() {
	return {
		props: {
			essays: getStaticFileProps(getAllEssayPreviews()),
		},
	}
}
