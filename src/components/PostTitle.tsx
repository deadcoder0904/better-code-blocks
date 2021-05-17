import { MDXProvider } from '@mdx-js/react'

import { MDXComponents } from '@/components/mdx/index'
import { ShiftBy } from '@/components/ShiftBy'
import { formatDate } from '@/utils/date'

import type { Meta } from '@/types/index'

type Props = {
	frontmatter: Meta
}

export const PostTitle = ({ frontmatter }: Props) => (
	<MDXProvider components={MDXComponents}>
		<div className="grid--wrapper">
			<dl>
				<dt className="sr-only">Published on</dt>
				<dd className="m-0 text-blueGray-500">
					<time dateTime={frontmatter.date.toLocaleString()}>{formatDate(frontmatter.date)}</time>
				</dd>
			</dl>
			<ShiftBy x={-2}>
				<h1 className="text-3xl font-extrabold leading-none tracking-tight text-blueGray-800 md:text-5xl">
					{frontmatter.title}
				</h1>
			</ShiftBy>
			<h2 className="mb-8 prose text-blueGray-500">
				By <a href="https://twitter.com/deadcoder0904">{frontmatter.author}</a>
			</h2>
		</div>
	</MDXProvider>
)
