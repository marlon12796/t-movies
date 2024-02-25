import { cn } from '../../utils/helper';
import { sections } from '../../constants';
import { maxWidth } from '../../styles';
import { useGetShowsQuery } from '../../services/TMDB';
import { Loader } from '../../components/Loader';
import Error from '../../components/Error';
import { Hero } from './components';
import { Section } from '../../components/Section';

const Home = () => {
	const { data, isLoading, isError } = useGetShowsQuery({
		category: 'tv',
		type: 'top_rated',
		page: 1,
	});
	if (isLoading) return <Loader />;

	if (isError) return <Error error='Unable to fetch the movies! ' />;

	const popularMovies = data?.results.slice(0, 7);
	return (
		<>
			<Hero movies={popularMovies} />
			<div className={cn(maxWidth, 'lg:mt-12 md:mt-8 sm:mt-6 xs:mt-4 mt-2')}>
				{sections.map(({ title, category, type }) => (
					<Section title={title} category={category} type={type} key={title} />
				))}
			</div>
		</>
	);
};

export default Home;
