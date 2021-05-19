import { HTMLAttributes } from 'react'

export const Pre = (pre: HTMLAttributes<HTMLPreElement>) => {
	const { theme } = pre.children?.props
	const { className } = pre
	// console.log(theme) /// i can access `theme` here. now just need to find a way to style it
	return (
		<pre
			className={`${className} theme-${theme} px-4 py-3 overflow-x-auto bg-gray-900 rounded-md`}
			{...pre}
		/>
	)
}
