import { useEffect, useState } from 'react';
import { useObserver } from './useObserver';

export const useMoveInAnimation = (ref, delay = 0, canLoad = true) => {
  const [startAnimation, setStartAnimation] = useState(false);

  let timeout;

  useObserver(
    ref,
    canLoad,
    startAnimation,
    () => (timeout = setTimeout(() => setStartAnimation(true), delay))
  );

  useEffect(() => () => clearTimeout(timeout), []);

  return startAnimation;
};
