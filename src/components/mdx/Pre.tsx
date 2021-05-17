import { HTMLAttributes } from 'react'

export const Pre = ({ className = '', ...props }: HTMLAttributes<HTMLPreElement>) => {
	console.log(props) /// i can access `theme` here. now just need to find a way to style it
	return (
		<pre className={`${className} px-4 py-3 overflow-x-auto bg-gray-900 rounded-md`} {...props} />
	)
}
