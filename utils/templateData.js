export const navLinks = [
  { label: 'Головна', href: '/' },
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

export const benefitsData = [
  { value: '40%', text: 'економія коштів' },
  { value: 'в 7', text: 'разів швидше' }
];

import Company1 from '@/assets/images/svg/partners/company_logo1.svg';
import Company2 from '@/assets/images/svg/partners/company_logo2.svg';
import Company3 from '@/assets/images/svg/partners/company_logo3.svg';
import Company4 from '@/assets/images/svg/partners/company_logo4.svg';
import Company5 from '@/assets/images/svg/partners/company_logo5.svg';
import Company6 from '@/assets/images/svg/partners/company_logo6.svg';
import Company7 from '@/assets/images/svg/partners/company_logo7.svg';
import Company8 from '@/assets/images/svg/partners/company_logo8.svg';
import Company9 from '@/assets/images/svg/partners/company_logo9.svg';
import Company10 from '@/assets/images/svg/partners/company_logo10.svg';
import Company11 from '@/assets/images/svg/partners/company_logo11.svg';
import Company12 from '@/assets/images/svg/partners/company_logo12.svg';

export const partners = [
  <Company1 />,
  <Company2 />,
  <Company3 />,
  <Company4 />,
  <Company5 />,
  <Company6 />,
  <Company7 />,
  <Company8 />,
  <Company9 />,
  <Company10 />,
  <Company11 />,
  <Company12 />
];

export const features = {
  standart: [
    { question: 'Часові затрати', answer: '2 місяці' },
    { question: 'Юридичні питання', answer: '5+ документів' },
    { question: 'Витрати', answer: '$2000 + податки' }
  ],
  outstaff: [
    { question: 'Часові затрати', answer: '3 дні' },
    { question: 'Юридичні питання', answer: '1 договір' },
    { question: 'Витрати', answer: '$1000' }
  ]
};

import specialist1 from '@/assets/images/specialists/specialist-1.jpg';
import specialist2 from '@/assets/images/specialists/specialist-2.jpg';
import specialist3 from '@/assets/images/specialists/specialist-3.jpg';

export const specialistCards = [
  {
    id: 1,
    jobName: 'Інженер-проектувальник у Revit',
    experiense: '5+ років досвіду',
    imageSrc: specialist1,
    features: [
      { label: 'мови', list: ['Англійська', 'Російська', 'Українська'] },
      {
        label: 'Навички',
        list: [
          'Revit',
          'Autocad',
          'Blender',
          '3ds Max',
          'Spline',
          'Adobe Photoshop',
          'Adobe Illustrator',
          'Webflow'
        ]
      }
    ]
  },
  {
    id: 2,
    jobName: 'Розробник програмного забезпечення',
    experiense: '5+ років досвіду',
    imageSrc: specialist2,
    features: [
      { label: 'мови', list: ['Англійська', 'Російська'] },
      {
        label: 'Навички',
        list: ['Python', 'C++', 'Javascript', 'Revit', 'Autocad', 'Blender']
      }
    ]
  },
  {
    id: 3,
    jobName: 'Інженер каналізацій',
    experiense: '5+ років досвіду',
    imageSrc: specialist3,
    features: [
      { label: 'мови', list: ['Англійська', 'Російська', 'Українська'] },
      {
        label: 'Навички',
        list: ['Python', 'C++', 'Javascript', 'Revit', 'Autocad', 'Blender']
      }
    ]
  }
];

export const factors = [
  {
    id: '01',
    title: 'Внутрішня конкуренція',
    text: 'Ми створюємо середовище зросту, де спеціалісти рівня джуніор вчаться у сіньйорів'
  },
  {
    id: '02',
    title: 'Економія',
    text: 'Податки, утримання офісу, техніка, рекрутмент. Ми повністю закриваємо цю складну ланку процесів'
  },
  {
    id: '03',
    title: 'Оперативність',
    text: 'Спеціаліст може почати роботу протягом 2 днів після завершення домовленостей'
  },
  {
    id: '04',
    title: 'Компетенція',
    text: 'Ми маємо чіткі вимоги до спеціалістів і самі оцінимо здібності кандидатів, вам не потрібно бути експертом в цій області'
  },
  {
    id: '05',
    title: 'Команда',
    text: 'Готуючи великий проект, ви можете найняти одразу декількох спеціалістів під різні задачі, замість того, щоб шукати кожного окремо'
  }
];

import latestNews1 from '@/assets/images/latestNews/latest-news-1.jpg';
import latestNews2 from '@/assets/images/latestNews/latest-news-2.jpg';
import latestNews3 from '@/assets/images/latestNews/latest-news-3.jpg';

export const latestNewsList = [
  {
    title: 'Аутсорсинг або аутстафінг. 10 ефективних порад',
    author: 'Дмитро Степанчук',
    publicDate: '09.03.2023',
    tags: ['Аутстафінг', 'NewStaff'],
    timeRead: '5 хвилин',
    href: '/',
    image: latestNews1
  },
  {
    title: '2022 у NewStaff: огляд року',
    author: 'Олена Іванчук',
    publicDate: '09.03.2023',
    tags: ['NewStaff'],
    timeRead: '5 хвилин',
    href: '/',
    image: latestNews2
  },
  {
    title: 'Інженери програмного забезпечення NewStaff',
    author: 'Богдан Романчук',
    publicDate: '09.03.2023',
    tags: ['Cпеціалізації', 'Аутстафінг', 'NewStaff'],
    timeRead: '5 хвилин',
    href: '/',
    image: latestNews3
  }
];



export const oftenQuestionsData = [
  {
    id: 1,
    question: 'Якщо обраний спеціаліст не підійшов, що робити?',
    answer:
      'Ми надаємо відповідного до ваших вимог спеціаліста, який закриє поставлені перед вами задачі. Та можемо замінити спеціаліста, після того, як отримаємо таке звернення від вас. Додаткових витрат при цьому немає.'
  },
  {
    id: 2,
    question: 'Чим ваші послуги відрізняються від аутсорсингу?',
    answer:
      'Ми надаємо відповідного до ваших вимог спеціаліста, який закриє поставлені перед вами задачі. Та можемо замінити спеціаліста, після того, як отримаємо таке звернення від вас. Додаткових витрат при цьому немає.'
  },
  {
    id: 3,
    question: 'Як відбувається комунікація зі спеціалістом?',
    answer:
      'Ми надаємо відповідного до ваших вимог спеціаліста, який закриє поставлені перед вами задачі. Та можемо замінити спеціаліста, після того, як отримаємо таке звернення від вас. Додаткових витрат при цьому немає.'
  },
  {
    id: 4,
    question: 'Чи мають працівники безперервний доступ до мережі?',
    answer:
      'Ми надаємо відповідного до ваших вимог спеціаліста, який закриє поставлені перед вами задачі. Та можемо замінити спеціаліста, після того, як отримаємо таке звернення від вас. Додаткових витрат при цьому немає.'
  },
  {
    id: 5,
    question: 'Потрібна передоплата?',
    answer:
      'Ми надаємо відповідного до ваших вимог спеціаліста, який закриє поставлені перед вами задачі. Та можемо замінити спеціаліста, після того, як отримаємо таке звернення від вас. Додаткових витрат при цьому немає.'
  }
];

import Logo0 from '@/assets/images/svg/practicing/company-s4.svg';
import Logo1 from '@/assets/images/svg/practicing/company-s5.svg';
import Logo2 from '@/assets/images/svg/practicing/company-m1.svg';
import Logo3 from '@/assets/images/svg/practicing/company-m5.svg';
import Logo4 from '@/assets/images/svg/practicing/company-l2.svg';
import Logo5 from '@/assets/images/svg/practicing/company-l3.svg';
import Logo6 from '@/assets/images/svg/practicing/company-s1.svg';
import Logo7 from '@/assets/images/svg/practicing/company-s2.svg';
import Logo8 from '@/assets/images/svg/practicing/company-m4.svg';
import Logo9 from '@/assets/images/svg/practicing/company-l1.svg';
import Logo10 from '@/assets/images/svg/practicing/company-s3.svg';
import Logo11 from '@/assets/images/svg/practicing/company-m2.svg';
import Logo12 from '@/assets/images/svg/practicing/company-m3.svg';
import Logo13 from '@/assets/images/svg/practicing/company-l4.svg';

export const practicing = [
  <Logo0 />,
  <Logo1 />,
  <Logo2 />,
  <Logo3 />,
  <Logo4 />,
  <Logo5 />,
  <Logo6 />,
  <Logo7 />,
  <Logo8 />,
  <Logo9 />,
  <Logo10 />,
  <Logo11 />,
  <Logo12 />,
  <Logo13 />
];