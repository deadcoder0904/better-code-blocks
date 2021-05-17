import { HTMLAttributes } from 'react'

export const H5 = ({ className = '', ...props }: HTMLAttributes<HTMLHeadingElement>) => (
	<h5 className={`${className} text-lg font-semibold text-blueGray-900`} {...props} />
)
