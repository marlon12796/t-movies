import { Link } from 'react-router-dom';
import img from '../../assets/svg/not-found.svg';

const NotFound = () => {
	return (
		<div className='w-screen h-screen flex flex-col gap-4 items-center justify-center dark:bg-black bg-[#cdcdcd]'>
			<div className='flex flex-col gap-1 items-center font-robotoCondensed'>
				<img src={img} alt='not found' className='lg:max-h-[370px] xs:max-h-[270px] max-h-[180px] w-full' />
				<h3 className='sm:text-2xl xs:text-xl text-lg mt-2 dark:text-gray-50 text-gray-900 font-medium'>
					Ohh! Page Not found{' '}
				</h3>
				<p className='sm:text-[16.75px] text-[14px] dark:text-gray-300 text-gray-800 '>
					We can't seem to find the page you are looking for
				</p>
			</div>
			<div className='flex flex-wrap items-center justify-center gap-3'>
				<Link
					to='/'
					className='block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg'
				>
					Go back
				</Link>
				<a
					href='https://github.com/marlon12796'
					target='_blank'
					rel='noopener noreferrer'
					className='block py-2 px-4 text-gray-400 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg'
				>
					Contact support
				</a>
			</div>
		</div>
	);
};

export default NotFound;
