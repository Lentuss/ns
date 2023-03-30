import { useEffect, useState } from 'react';

import { BREAKPOINTS } from '@/utils/const';

export const useDetectDevice = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const isDesktop = width > BREAKPOINTS.desktop;
  const isMobile = width <= BREAKPOINTS.tablet;

  return {
    isDesktop,
    isMobile
  };
};
