import { HTMLAttributes } from 'react'

export const H1 = ({ className = '', ...props }: HTMLAttributes<HTMLHeadingElement>) => (
	<h1 className={`${className} text-4xl font-extrabold text-blueGray-900`} {...props} />
)
