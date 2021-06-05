import React from 'react'

type PreProps = {
	children: React.ReactChild
	theme: string
	showLineNumbers: string
}

export const PreCode = ({ children, theme, showLineNumbers }: PreProps) => {
	return (
		<code
			className={`px-4 py-3 overflow-x-auto rounded-md full-bleed ${
				theme ? `${theme}-theme` : 'bg-gray-900'
			} ${showLineNumbers ? 'line-numbers' : ''}`}
		>
			{children}
		</code>
	)
}
