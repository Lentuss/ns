import { useEffect, useState } from 'react';

const SCROLL_MIN_DISTANCE = 10;

export function useScrollDirection() {
  const [dir, setDir] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (
        direction !== dir &&
        (scrollY - lastScrollY > SCROLL_MIN_DISTANCE ||
          scrollY - lastScrollY < -SCROLL_MIN_DISTANCE)
      ) {
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
