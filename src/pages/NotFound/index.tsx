import { Link } from 'react-router-dom';
import img from '../../assets/svg/not-found.svg';
import pattern from '../../assets/svg/bg-pattern.svg';

const NotFound = () => {
	return (
		<div className='w-screen h-screen flex flex-col gap-4 items-center justify-center bg-[#0f172a] isolate overflow-hidden'>
			<div className='flex flex-col gap-1 items-center font-robotoCondensed'>
				<img src={pattern} className='z-[-10] absolute w-full h-full opacity-80'></img>
				<img src={img} alt='not found' className='lg:max-h-[370px] xs:max-h-[270px] max-h-[180px] w-full' />
				<h3 className='sm:text-4xl font-bold text-xl mt-2 text-[#cbd5e1] '>
					Ohh! Page{' '}
					<span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500'>
						Not found
					</span>{' '}
				</h3>
				<p className='sm:text-lg text-base text-[#cbd5e1]'>We can't seem to find the page you are looking for</p>
			</div>
			<div className='flex flex-wrap items-center justify-center gap-3'>
				<Link
					to='/'
					className='group flex items-center justify-start w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1'
				>
					<div className='flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3'>
						<svg className='w-4 h-4' viewBox='0 0 512 512' fill='white'>
							<path d='M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z'></path>
						</svg>
					</div>
					<div className='absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100'>
						Go Back
					</div>
				</Link>
				<a
					href='https://github.com/marlon12796'
					target='_blank'
					rel='noopener noreferrer'
					className='flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900'
				>
					<svg viewBox='0 0 24 24' height='24' width='24' xmlns='http://www.w3.org/2000/svg'>
						<path
							fill='#FFFFFF'
							d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
						></path>
					</svg>
					Support
				</a>
			</div>
		</div>
	);
};

export default NotFound;
