import { useRouter } from 'next/router'
import Link from 'next/link'
import { MDXProvider } from '@mdx-js/react'

import { MDXComponents } from '@/components/mdx/index'
import { PostTitle } from '@/components/PostTitle'
import { Nav } from '@/components/Nav'

import type { Meta, Essays } from '@/types/index'

type Props = {
	meta: Meta
	essays: Essays
	children: React.ReactChild
}

const Essay = ({ essays, meta, children }: Props) => {
	const router = useRouter()
	const blogIndex =
		essays.length > 1
			? essays.findIndex((essay) => essay.slug === router.pathname.replace('/essay/', ''))
			: 0
	const previous = essays[blogIndex + 1]
	const next = essays[blogIndex - 1]
	return (
		<>
			<Nav pathname={router.pathname} />
			<PostTitle frontmatter={meta} />
			{/* <p className="mb-6 underline">
					<>
					{frontmatter.tags.map((tag) => (
						<Link href={`/tag/${tag}`}>
						<a>
						<i key={tag} className="pr-2">
						{tag}
						</i>
						</a>
						</Link>
						))}
						</>
					</p> */}

			<div className="prose grid--wrapper">
				<MDXProvider components={MDXComponents}>{children}</MDXProvider>
			</div>

			<div className="mt-10 prose grid--wrapper">
				{(next || previous) && (
					<>
						{next && (
							<div className="pt-4 pb-8">
								<div className="text-lg text-blueGray-500">Next Article</div>
								<h3
									className="pb-2 text-xl text-blueGray-600"
									style={{
										marginTop: 0,
									}}
								>
									<Link href={`/essay/${next.slug}`}>
										<a>{next.title}</a>
									</Link>
								</h3>
							</div>
						)}
						{previous && (
							<div className="pt-4 pb-8">
								<div className="text-lg text-blueGray-500">Previous Article</div>
								<h3
									className="pb-2 text-xl text-blueGray-600"
									style={{
										marginTop: 0,
									}}
								>
									<Link href={`/essay/${previous.slug}`}>
										<a>{previous.title}</a>
									</Link>
								</h3>
							</div>
						)}
					</>
				)}
				<div className="mb-48 text-xl text-blueGray-600">
					<Link href="/essays">
						<a>&larr; Back to Essays</a>
					</Link>
				</div>
			</div>
		</>
	)
}

export default Essay
