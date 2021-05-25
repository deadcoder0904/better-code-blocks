import Image, { ImageProps } from 'next/image'

export const Img = ({ className = '', ...props }: ImageProps) => (
	<div className="unset-img full-bleed">
		<Image className={`${className} custom-img`} layout="fill" {...props} />
	</div>
)

// export const Img = ({ className = 'full-bleed', ...props }) => (
// 	<img className={`${className}`} {...props} />
// )
