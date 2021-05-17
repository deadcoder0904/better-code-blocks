import type { Post } from '@/types/post'

export const getStaticFileProps = (
	getAllPostPreviews: Array<{
		slug: string
		module: any
	}>
) => {
	return getAllPostPreviews.map((post: Post) => ({
		title: post.module.meta.title,
		slug: post.slug,
	}))
}
