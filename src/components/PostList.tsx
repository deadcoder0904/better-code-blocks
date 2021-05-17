import Link from 'next/link'
import { MDXProvider } from '@mdx-js/react'

import { TopBorder } from '@/components/TopBorder'
import { Nav } from '@/components/Nav'
import { MDXComponents } from '@/components/mdx'
import { ShiftBy } from '@/components/ShiftBy'
import { formatDate } from '@/utils/date'

import type { Post as PostType } from '@/types/post'

type Props = {
	posts: Array<PostType>
	pathname: string
	description: string
	page: string
}

export const PostList = ({ posts, pathname, description, page }: Props) => {
	return (
		<div className="mb-24">
			<TopBorder />
			<Nav pathname={pathname} />
			<div className="mx-auto grid--wrapper">
				<ShiftBy x={-1}>
					<h1 className="text-4xl font-extrabold text-blueGray-800 sm:text-5xl">Latest</h1>
				</ShiftBy>
				<p className="text-xl font-medium text-blueGray-700 sm:text-2xl">{description}</p>
				{!posts.length && (
					<h2 className="mt-8 text-lg text-blueGray-600 sm:text-xl">Coming soon...</h2>
				)}
				{!!posts.length && (
					<ul className="divide-y">
						{posts.map((post: PostType) => {
							const frontmatter = post.module.meta
							const Description = post.module.default
							return (
								<li key={frontmatter.title} className="list-none">
									<article className="my-10">
										<div className="py-2">
											<dl>
												<dt className="sr-only">Published on</dt>
												<dd className="leading-6 text-blueGray-500">
													<time dateTime={frontmatter.date.toLocaleString()}>
														{formatDate(frontmatter.date)}
													</time>
												</dd>
											</dl>
											<ShiftBy x={-2} className="py-1">
												<h2 className="text-3xl font-extrabold leading-tight text-blueGray-800">
													<Link href={`/${page}/${post.slug}`}>
														<a>{frontmatter.title}</a>
													</Link>
												</h2>
											</ShiftBy>
											<p className="leading-6 prose text-blueGray-500">
												By <a href="https://twitter.com/deadcoder0904">{frontmatter.author}</a>
											</p>
										</div>
										<div className="prose">
											<MDXProvider components={MDXComponents}>
												<Description />
											</MDXProvider>
											<h4>
												<Link href={`/${page}/${post.slug}`}>
													<a
														className="font-extrabold leading-6 underline text-cyan-700 hover:text-cyan-900"
														aria-label={`Read ${frontmatter.title}`}
													>
														Read the {pathname.includes('essay') ? 'essay' : 'tutorial'} &rarr;
													</a>
												</Link>
											</h4>
										</div>
									</article>
								</li>
							)
						})}
					</ul>
				)}
			</div>
		</div>
	)
}
