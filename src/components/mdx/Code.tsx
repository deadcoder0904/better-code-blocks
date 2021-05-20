import { HTMLAttributes } from 'react'

export const Code = ({
	className = '',
	theme,
	showLineNumbers,
	...props
}: HTMLAttributes<HTMLElement> & { theme: string; showLineNumbers: string }) => {
	console.log('Code -> start')
	console.log({ theme, showLineNumbers })
	console.log('Code -> end')
	return (
		<code
			className={`p-1 overflow-x-auto text-blueGray-200 rounded-md text-base ${className} ${
				theme ? `${theme}-theme` : 'bg-gray-900'
			} ${showLineNumbers ? 'line-numbers' : ''}`}
			{...props}
		/>
	)
}
