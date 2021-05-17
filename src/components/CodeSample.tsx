import clsx from 'clsx'

type BGColors = {
	amber: string
	emerald: string
	fuchsia: string
	gray: string
	indigo: string
	lightBlue: string
	purple: string
	rose: string
}

const codeBackground: Omit<BGColors, 'gray'> = {
	amber: 'bg-amber-500',
	emerald: 'bg-emerald-500',
	fuchsia: 'bg-fuchsia-400',
	// gray: 'bg-gray-400',
	indigo: 'bg-indigo-400',
	lightBlue: 'bg-lightBlue-500',
	purple: 'bg-purple-400',
	rose: 'bg-rose-400',
}

const previewBackground: BGColors = {
	amber: 'bg-gradient-to-r from-amber-50 to-amber-100',
	emerald: 'bg-gradient-to-r from-emerald-50 to-teal-100',
	fuchsia: 'bg-gradient-to-r from-fuchsia-50 to-fuchsia-100',
	gray: 'bg-gradient-to-r from-gray-50 to-gray-100',
	indigo: 'bg-gradient-to-r from-indigo-50 to-indigo-100',
	lightBlue: 'bg-gradient-to-r from-lightBlue-50 to-lightBlue-100',
	purple: 'bg-gradient-to-r from-purple-50 to-purple-100',
	rose: 'bg-gradient-to-r from-rose-50 to-rose-100',
}

type CodeSampleProps = {
	preview: string
	snippet: string
	previewClassName: string
	color: keyof BGColors
}

export const CodeSample = ({
	preview,
	snippet,
	previewClassName,
	color = 'gray',
}: CodeSampleProps) => {
	return (
		<div className="relative mb-8 overflow-hidden">
			<div
				className={clsx(
					'rounded-t-xl overflow-hidden',
					previewBackground[color],
					previewClassName,
					{
						'p-10': !previewClassName,
					}
				)}
				dangerouslySetInnerHTML={{ __html: preview }}
			/>
			<div
				className={clsx(
					'overflow-hidden rounded-b-xl',
					color === 'gray' ? '' : codeBackground[color],
					{
						'bg-gray-800': color === 'gray' ? '' : !codeBackground[color],
					}
				)}
			>
				<pre
					className={clsx(
						'scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white',
						{
							'bg-black bg-opacity-75': color === 'gray' ? '' : codeBackground[color],
						}
					)}
				>
					<code className="language-html" dangerouslySetInnerHTML={{ __html: snippet }} />
				</pre>
			</div>
		</div>
	)
}
