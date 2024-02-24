import './index.css';
import 'swiper/css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './context/themeContext.tsx';
import GlobalContextProvider from './context/globalContext.tsx';
import { LazyMotion, domAnimation } from 'framer-motion';
import { tmdbApi } from './services/TMDB.ts';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ApiProvider api={tmdbApi}>
				<ThemeProvider>
					<GlobalContextProvider>
						<LazyMotion features={domAnimation}>
							<App />
						</LazyMotion>
					</GlobalContextProvider>
				</ThemeProvider>
			</ApiProvider>
		</BrowserRouter>
	</React.StrictMode>
);
