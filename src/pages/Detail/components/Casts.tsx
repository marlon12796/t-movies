import { memo } from 'react';
import { m } from 'framer-motion';
import { useMediaQuery } from 'usehooks-ts';
import { useMotion } from '../../../hooks';
import Image from '../../../components/Image';
import NotFoundActor from '../../../assets/images/404_Actor.jpg';
interface CastsProps {
	casts: {
		id: string;
		profile_path: string;
		name: string;
	}[];
}
export const Casts = memo(
	({ casts }: CastsProps) => {
		console.log(casts);
		const isNotMobile = useMediaQuery('(min-width: 768px');
		const { fadeDown, staggerContainer } = useMotion();
		const topCasts = casts.slice(0, 4);
		if (topCasts.length === 0) return null;
		return (
			<>
				<m.h3
					variants={fadeDown}
					className='text-secColor font-bold md:text-[18px] sm:text-[16.75px] xs:text-[15.75px] text-[14.75px]'
				>
					Top Casts
				</m.h3>
				<m.div
					variants={staggerContainer(0.2, 1)}
					initial='hidden'
					animate='show'
					className='flex flex-wrap md:gap-4 sm:gap-[14px] gap-2  sm:-mt-2 xs:-mt-[6px] -mt-1'
				>
					{topCasts.map((cast) => {
						const { id, profile_path: profilePath, name } = cast;
						return (
							<m.figure variants={fadeDown} key={id} className='flex flex-col justify-start gap-2 w-1/5'>
								<div className='h-[80%]'>
									<Image
										width={isNotMobile ? 64 : 40}
										height={isNotMobile ? 96 : 54}
										src={profilePath !== null ? `https://image.tmdb.org/t/p/original/${profilePath}` : NotFoundActor}
										alt={name}
										className=' object-cover rounded-md shadow-md transition-all duration-300 h-full w-full'
									/>
								</div>

								<h4 className='text-gray-300 md:text-[12px] sm:text-[10.75px] text-[10px]  text-center font-semibold sm:-mt-0 leading-snug  h-[20%] flex justify-center items-center'>
									{name}
								</h4>
							</m.figure>
						);
					})}
				</m.div>
			</>
		);
	},
	(prevProps, newProps) => {
		return prevProps.casts[0]?.id === newProps.casts[0]?.id;
	}
);

Casts.displayName = 'Casts';
