import { useRouter } from 'next/router'

import { PostList } from '@/components/PostList'
import { getAllTutorialPreviews } from '@/utils/tutorial/getAllTutorialPreviews'

import type { Post as PostType } from '@/types/post'

type Tutorials = Array<PostType>

const tutorials: Tutorials = getAllTutorialPreviews()

const TutorialsPage = () => {
	const router = useRouter()
	return (
		<PostList
			description="Tutorials on Web Development & SaaS"
			pathname={router.pathname}
			posts={tutorials}
			page="tutorial"
		/>
	)
}

export default TutorialsPage
