import { HTMLAttributes } from 'react'

export const A = ({ className = '', ...props }: HTMLAttributes<HTMLAnchorElement>) => (
	<a className={`${className} underline text-blueGray-600`} {...props} />
)
