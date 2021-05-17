import { importAll, dateSortDesc } from '@/utils/common/getAllPreviews'

import type { Post } from '@/types/post'

export const getAllEssayPreviews = (): Array<{
	slug: string
	module: any
}> =>
	importAll(require.context('../../pages/essay/?preview', true, /\.mdx$/))
		.filter((p: Post) => p.module.meta.published)
		.sort((a: Post, b: Post) => dateSortDesc(a.module.meta.date, b.module.meta.date))

export const getAllPublishedEssays = (): Array<{
	slug: string
	module: any
}> =>
	importAll(require.context('../../pages/essay/?rss', true, /\.mdx$/))
		.filter((p: Post) => p.module.meta.published)
		.sort((a: Post, b: Post) => dateSortDesc(a.module.meta.date, b.module.meta.date))
