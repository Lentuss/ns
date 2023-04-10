export const disableHTMLScrolling = () => {
  document.documentElement.style.overflowY = 'hidden';
  document.documentElement.style.height = '100vh';
};

export const enableHTMLScrolling = () => {
  document.documentElement.style.overflowY = '';
  document.documentElement.style.height = '';
};

export const isEmail = (str) => str.includes('@');
