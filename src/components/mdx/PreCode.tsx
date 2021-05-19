import { HTMLAttributes } from 'react'

export const PreCode = (props: HTMLAttributes<HTMLPreElement> & { theme: string }) => {
	const { theme } = props
	console.log(theme)
	return <code className={`theme-${theme} text-blueGray-200`} {...props} />
}
