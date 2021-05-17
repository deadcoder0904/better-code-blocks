import { HTMLAttributes } from 'react'

export const H3 = ({ className = '', ...props }: HTMLAttributes<HTMLHeadingElement>) => (
	<h3 className={`${className} text-2xl font-semibold text-blueGray-900`} {...props} />
)
