export const disableHTMLScrolling = () => {
  document.documentElement.style.overflowY = 'hidden';
  document.documentElement.style.height = '100vh';
  document.documentElement.style.paddingRight = '16px';
};

export const enableHTMLScrolling = () => {
  document.documentElement.style.overflowY = '';
  document.documentElement.style.height = '';
  document.documentElement.style.paddingRight = '';
};

export const isEmail = (str) => str.includes('@');

export const setCssVH = () => {
  const vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
