import React from 'react';
import { useState } from 'react';
import { cn } from '../../utils/helper';
import { LazyLoadImage } from 'react-lazy-load-image-component';
interface ImageProps {
	src: string;
	className: string;
	alt: string;
	width: string | number;
	height: string | number;
	zoomInEffect?: boolean;
}

const Image: React.FC<ImageProps> = ({ src, className, width, alt, height, zoomInEffect = false }) => {
	const [isImageLoaded, setIsImageLoaded] = useState(false);

	const handleLoad = () => {
		setIsImageLoaded(true);
	};

	return (
		<LazyLoadImage
			src={src}
			alt={alt}
			height={height}
			width={width}
			loading='lazy'
			className={cn(
				className,
				!isImageLoaded
					? `opacity-0 ${zoomInEffect ? 'scale-95' : ''}`
					: `opacity-100 ${zoomInEffect ? 'scale-100' : ''}`
			)}
			afterLoad={handleLoad}
		/>
	);
};

export default Image;
