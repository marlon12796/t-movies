import React, { useCallback, useState } from 'react';
import { API_KEY, TMDB_API_BASE_URL } from '../utils/config';

interface GlobalContextType {
	videoId: string;
	setVideoId: (videoId: string) => void;
	getTrailerId: (id: number | string) => Promise<void>;
	toggleModal: () => void;
	isModalOpen: boolean;
	showSidebar: boolean;
	setShowSidebar: (show: boolean) => void;
}

interface Props {
	children: React.ReactNode;
}
export const GlobalContext = React.createContext<GlobalContextType | undefined>(undefined);

const GlobalContextProvider: React.FC<Props> = ({ children }) => {
	const [showSidebar, setShowSidebar] = useState<boolean>(false);
	const [videoId, setVideoId] = useState<string>('');
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const toggleModal = useCallback(() => setIsModalOpen((prev) => !prev), []);

	const getTrailerId = useCallback(async (id: number | string) => {
		try {
			const response = await fetch(`${TMDB_API_BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
			const data = await response.json();
			const key = data.results[0]?.key;
			if (key) setVideoId(key);
		} catch (error) {
			console.error('Fetching trailer ID failed:', error);
		}
	}, []);

	return (
		<GlobalContext.Provider
			value={{ videoId, setVideoId, getTrailerId, toggleModal, isModalOpen, showSidebar, setShowSidebar }}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
