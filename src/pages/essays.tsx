import { useRouter } from 'next/router'

import { PostList } from '@/components/PostList'
import { getAllEssayPreviews } from '@/utils/essay/getAllEssayPreviews'

import type { Post as PostType } from '@/types/post'

type Essays = Array<PostType>

const essays: Essays = getAllEssayPreviews()

const EssaysPage = () => {
	const router = useRouter()
	return (
		<PostList
			description="Essays on Startups, Entrepreneurship & Life"
			pathname={router.pathname}
			posts={essays}
			page="essay"
		/>
	)
}

export default EssaysPage
