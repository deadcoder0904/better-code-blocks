// import Image, { ImageProps } from 'next/image'

// export const Img = ({ className = '', ...props }: ImageProps) => (
// 	<Image className={`${className}`} layout="responsive" {...props} />
// )

export const Img = ({ className = 'full-bleed', ...props }) => (
	<img className={`${className}`} {...props} />
)
