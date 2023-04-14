import { useEffect, useState } from 'react';

export function useScrollDirection() {
	const [dir, setDir] = useState(null);

	useEffect(() => {
		let lastScrollY = window.pageYOffset;
		const updateScrollDirection = () => {
			const scrollY = window.pageYOffset;
			const direction = scrollY > lastScrollY ? 'down' : 'up';
			if (direction !== dir && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
				setDir(direction);
			}
			lastScrollY = scrollY > 0 ? scrollY : 0;
		};
		window.addEventListener('scroll', updateScrollDirection);
		return () => {
			window.removeEventListener('scroll', updateScrollDirection);
		};
	}, [dir]);

	return dir;
}
