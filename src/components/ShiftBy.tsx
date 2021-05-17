type Props = {
	className?: string
	x?: number
	y?: number
	children: React.ReactChild
}

export const ShiftBy = ({ className = '', x = 0, y = 0, children, ...delegated }: Props) => {
	return (
		<div
			className={`${className}`}
			style={{
				transform: `translate(${x}px, ${y}px)`,
			}}
			{...delegated}
		>
			{children}
		</div>
	)
}
