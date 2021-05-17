import { HTMLAttributes } from 'react'

export const H2 = ({ className = '', ...props }: HTMLAttributes<HTMLHeadingElement>) => (
	<h2 className={`${className} text-3xl font-bold text-blueGray-900`} {...props} />
)
