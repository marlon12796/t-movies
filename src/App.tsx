import { Suspense, lazy } from 'react';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import { Loader } from './components/Loader';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import VideoModal from './components/VideoModal';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Catalog = lazy(() => import('./pages/Catalog'));
const Detail = lazy(() => import('./pages/Detail'));
function App() {
	return (
		<>
			<VideoModal />
			<SideBar />
			<Header />
			<main className='dark:bg-black bg-mainColor lg:pb-14 md:pb-4 sm:pb-2 xs:pb-1 pb-0'>
				<ScrollToTop>
					<Suspense fallback={<Loader />}>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/:category' element={<Catalog />} />
							<Route path='/:category/:id' element={<Detail />} />
							<Route path='*' element={<NotFound />} />
						</Routes>
					</Suspense>
				</ScrollToTop>
			</main>
			<Footer />
		</>
	);
}

export default App;
