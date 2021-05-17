import { HTMLAttributes } from 'react'

export const Code = ({ className = '', ...props }: HTMLAttributes<HTMLElement>) => (
	<code
		className={`${className} p-1 overflow-x-auto bg-gray-900 text-blueGray-200 rounded-md text-base`}
		{...props}
	/>
)
