import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IMovie } from '../../types';
import MovieCard from '../MovieCard';

interface MoviesSlidesProps {
	movies: IMovie[];
	category: string;
}

const MoviesSlides: FC<MoviesSlidesProps> = ({ movies, category }) => (
	<Swiper slidesPerView='auto' spaceBetween={15} className='mySwiper'>
		{movies.map((movie) => {
			return (
				<SwiperSlide key={movie.id} className='flex flex-col xs:gap-[14px] gap-2 max-w-[170px]  rounded-lg'>
					<MovieCard movie={movie} category={category} />
				</SwiperSlide>
			);
		})}
	</Swiper>
);

export default MoviesSlides;
