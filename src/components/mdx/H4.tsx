import { HTMLAttributes } from 'react'

export const H4 = ({ className = '', ...props }: HTMLAttributes<HTMLHeadingElement>) => (
	<h4 className={`${className} text-xl font-semibold text-blueGray-900`} {...props} />
)
