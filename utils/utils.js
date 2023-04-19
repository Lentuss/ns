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

export const setAttributeOnHtml = (property, value) => {
  document.getElementsByTagName('html')[0].setAttribute(property, value);
};

export const setPropertyOnHtml = (property, value) => {
  document.documentElement.style.setProperty(property, value);
};

export const setCssVH = () => {
  const vh = window.innerHeight * 0.01;

  setPropertyOnHtml('--vh', `${vh}px`);
};

export const isEmpty = (obj) => Object.keys(obj).length === 0;
