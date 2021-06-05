import { HTMLAttributes } from 'react'

export const Code = ({ className = '', ...props }: HTMLAttributes<HTMLElement>) => {
	return (
		<code
			className={`p-1 overflow-x-auto text-blueGray-200 rounded-md text-base bg-gray-900 ${className}`}
			{...props}
		/>
	)
}
