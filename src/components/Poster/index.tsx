import { memo } from 'react';
import { m } from 'framer-motion';
import PosterNotFound from '../../assets/images/posterNotFound.jpg';
import Image from '../Image';
import { useMotion } from '../../hooks';
import { cn } from '../../utils/helper';

interface PosterPropsType {
	posterPath: string;
	title: string;
	className?: string;
}

export const Poster = memo(({ posterPath, title, className }: PosterPropsType) => {
	const { zoomIn } = useMotion();
	console.log(posterPath);
	return (
		<div className={cn(`md:block hidden h-[380px] w-[254px]`, className)}>
			<m.div variants={zoomIn(0.6, 0.8)} initial='hidden' animate='show'>
				<Image
					width={254}
					height={380}
					src={posterPath !== null ? `https://image.tmdb.org/t/p/original/${posterPath}` : PosterNotFound}
					alt={title}
					className='h-[380px] w-[254px] object-cover rounded-xl  shadow-lg transition-all duration-300'
				/>
			</m.div>
		</div>
	);
});
