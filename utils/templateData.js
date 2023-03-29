export const navLinks = [
  { label: 'Спеціалісти', href: '/' },
  { label: 'Як це працює', href: '/' },
  { label: 'Про нас', href: '/' },
  { label: 'Блог', href: '/' },
  { label: 'Контакти', href: '/' },
  { label: 'Вакансії', href: '/' }
];

import GBFlagIcon from '@/assets/images/svg/flags/GB.svg';
import ILFlagIcon from '@/assets/images/svg/flags/IL.svg';
import UAFlagIcon from '@/assets/images/svg/flags/UA.svg';

export const langSelectOptions = [
  { value: 'en', label: 'EN', icon: <GBFlagIcon /> },
  { value: 'il', label: 'IL', icon: <ILFlagIcon /> },
  { value: 'ua', label: 'UA', icon: <UAFlagIcon /> }
];
