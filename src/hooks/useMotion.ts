import { useCallback, useMemo } from 'react';

export const useMotion = () => {
	const zoomIn = useCallback(
		(scale = 0.9, duration = 0.5) => ({
			hidden: { opacity: 0, scale, transition: { duration, ease: 'easeIn' } },
			show: { opacity: 1, scale: 1, transition: { duration, ease: 'easeIn' } },
		}),
		[]
	);

	const staggerContainer = useCallback(
		(staggerChildren = 0.1, delayChildren = 0) => ({
			hidden: { opacity: 0 },
			show: { opacity: 1, transition: { staggerChildren, delayChildren } },
		}),
		[]
	);

	const fadeDown = useMemo(
		() => ({
			hidden: { y: -25, opacity: 0 },
			show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
		}),
		[]
	);

	const fadeUp = useMemo(
		() => ({
			hidden: { y: 50, opacity: 0 },
			show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
		}),
		[]
	);

	const slideIn = useCallback((direction = 'left', duration = 0.5, delay = 0) => {
		const x = direction === 'left' ? '-100vw' : direction === 'right' ? '100vw' : 0;
		const y = direction === 'up' ? '-100vh' : direction === 'down' ? '100vh' : 0;

		return {
			hidden: { x, y, opacity: 0 },
			show: { x: 0, y: 0, opacity: 1, transition: { delay, duration, ease: 'easeInOut' } },
		};
	}, []);

	return { zoomIn, fadeDown, fadeUp, staggerContainer, slideIn };
};
