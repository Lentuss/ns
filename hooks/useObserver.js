import { useEffect, useRef } from 'react';

export const useObserver = (ref, canLoad, isLoaded, callback) => {
  const observer = useRef();

  useEffect(() => {
    if (!canLoad) return;
    if (isLoaded) return;

    const cb = (entries) => {
      if (entries[0].isIntersecting) {
        callback();
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, []);
};
