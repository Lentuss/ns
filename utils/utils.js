import { BREAKPOINTS } from './const';

export const DETECT_DEVICE = {
  isDesktop() {
    return window.innerWidth > BREAKPOINTS.desktop;
  },
  isMobile() {
    return window.innerWidth <= BREAKPOINTS.mobile;
  },
  isTablet() {
    const ww = window.innerWidth;
    return ww > BREAKPOINTS.mobile && ww <= BREAKPOINTS.desktopSm;
  }
};
