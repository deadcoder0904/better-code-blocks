import { HTMLAttributes } from 'react'

export const H6 = ({ className = '', ...props }: HTMLAttributes<HTMLHeadingElement>) => (
	<h6 className={`${className} text-base font-semibold text-blueGray-900`} {...props} />
)
