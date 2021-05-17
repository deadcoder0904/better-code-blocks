import { HTMLAttributes } from 'react'

export const Strong = ({ className = '', ...props }: HTMLAttributes<HTMLElement>) => (
	<strong className={`${className} text-blueGray-900`} {...props} />
)
