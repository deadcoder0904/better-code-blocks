import { HTMLAttributes } from 'react'

export const PreCode = ({ className = '', ...props }: HTMLAttributes<HTMLPreElement>) => {
	console.log('pRecode')
	console.log({ props })
	return <code className={`${className} text-blueGray-200`} {...props} />
}
