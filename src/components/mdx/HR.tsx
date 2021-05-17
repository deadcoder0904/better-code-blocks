import { HTMLAttributes } from 'react'

export const HR = ({ className = '', ...props }: HTMLAttributes<HTMLHRElement>) => (
	// TODO: extend `border-t-1` in `tailwind.config.js`
	<hr className={`${className} border-t-2 text-blueGray-200`} {...props} />
)
