import { HTMLAttributes } from 'react'

export const P = ({ className = '', ...props }: HTMLAttributes<HTMLParagraphElement>) => (
	<p className={`${className} text-xl leading-9 text-blueGray-600 my-4 break-words`} {...props} />
)
