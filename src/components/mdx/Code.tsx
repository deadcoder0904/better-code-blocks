import { HTMLAttributes } from 'react'

export const Code = ({
	className = '',
	theme,
	...props
}: HTMLAttributes<HTMLElement> & { theme: string }) => (
	<code
		className={`p-1 overflow-x-auto text-blueGray-200 rounded-md text-base ${className} ${
			theme ? `${theme}-theme` : 'bg-gray-900'
		}`}
		{...props}
	/>
)
