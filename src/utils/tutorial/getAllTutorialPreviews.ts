import { importAll, dateSortDesc } from '@/utils/common/getAllPreviews'

import type { Post } from '@/types/post'

export const getAllTutorialPreviews = (): Array<{
	slug: string
	module: any
}> =>
	importAll(require.context('../../pages/tutorial/?preview', true, /\.mdx$/))
		.filter((p: Post) => p.module.meta.published)
		.sort((a: Post, b: Post) => dateSortDesc(a.module.meta.date, b.module.meta.date))

export const getAllPublishedTutorials = (): Array<{
	slug: string
	module: any
}> =>
	importAll(require.context('../../pages/tutorial/?rss', true, /\.mdx$/))
		.filter((p: Post) => p.module.meta.published)
		.sort((a: Post, b: Post) => dateSortDesc(a.module.meta.date, b.module.meta.date))
