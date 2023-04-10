import {
  BLOG_PAGE_ROUTE,
  MAIN_PAGE_ROUTE,
  SPECIALISTS_PAGE_ROUTE, ABOUT_PAGE_ROUTE, HOW_IT_WORKS_PAGE_ROUTE
} from './const';

export const navLinks = [
  { label: 'Головна', href: MAIN_PAGE_ROUTE },
  { label: 'Спеціалісти', href: SPECIALISTS_PAGE_ROUTE },
  { label: 'Як це працює', href: HOW_IT_WORKS_PAGE_ROUTE },
  { label: 'Про нас', href: ABOUT_PAGE_ROUTE },
  { label: 'Блог', href: BLOG_PAGE_ROUTE },
  { label: 'Контакти', href: '#' },
  { label: 'Вакансії', href: '#' }
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
    sallary: 'від $750/місяць',
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
    sallary: 'від $750/місяць',
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
    sallary: 'від $750/місяць',
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
    image: latestNews1,
    desription:
      'У світі розробки програмного забезпечення існує давнє питання: що краще — ІТ-аутсорсинг чи аутстафінг і чи є різниця між ними? Простіше кажучи: що буде ефективніше — найняти зовнішню команду за кордоном чи замовити спеціальну команду розробки програмного забезпечення повного циклу в компанії, яка пропонує таку послугу.'
  },
  {
    title: '2022 у NewStaff: огляд року',
    author: 'Олена Іванчук',
    publicDate: '09.03.2023',
    tags: ['NewStaff'],
    timeRead: '5 хвилин',
    href: '/',
    image: latestNews2,
    desription:
      'Простіше кажучи: що буде ефективніше — найняти зовнішню команду за кордоном чи замовити спеціальну команду розробки програмного забезпечення повного циклу в компанії, яка пропонує таку послугу.'
  },
  {
    title: 'Інженери програмного забезпечення NewStaff',
    author: 'Богдан Романчук',
    publicDate: '09.03.2023',
    tags: ['Cпеціалізації', 'Аутстафінг', 'NewStaff'],
    timeRead: '5 хвилин',
    href: '/',
    image: latestNews3,
    desription:
      'Простіше кажучи: що буде ефективніше — найняти зовнішню команду за кордоном чи замовити спеціальну команду розробки програмного забезпечення повного циклу в компанії, яка пропонує таку послугу.'
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
      'Аутсорсинг - передача функцій зовнішньому постачальнику послуг, а аутстафінг - це використання агентства для найму працівників для виконання завдань.'
  },
  {
    id: 3,
    question: 'Як відбувається комунікація зі спеціалістом?',
    answer:
      'Спілкування може проходити як на англійській так і на російській мові, проте всі робочі матеріали, та проєкти створюються на англійській мові.'
  },
  {
    id: 4,
    question: 'Чи мають працівники безперервний доступ до мережі?',
    answer:
      'Так, наші працівники знаходяться в офісі NewStaff в Україні, у безпечному місці. Ми забезпечуємо працівників комфортними умовами, програмами мотивації, та постійним доступом до мережі.'
  },
  {
    id: 5,
    question: 'Потрібна передоплата?',
    answer:
      'Оплата за перший місяць роботи спеціаліста відбувається за звичним принципом, в кінці місяці. Передоплата не потрібна.'
  }
];

export const specialistsCategoriesList = [
  {
    id: 1,
    label: 'Розробка програмного забезпечення',
    count: '10',
    href: '/developers'
  },
  {
    id: 2,
    label: 'Конструктори',
    count: '7',
    href: '/constructors'
  },
  {
    id: 3,
    label: 'Інженерія',
    count: '12',
    href: '/engineers'
  },
  {
    id: 4,
    label: 'Архітектура',
    count: '7',
    href: '/architects'
  }
];

export const specialistPageSections = [
  {
    title: 'Популярні спеціалісти',
    accent: '',
    href: ''
  },
  {
    title: 'Спеціалісти розробники',
    accent: 'від $3500/місяць',
    href: '/developers'
  },
  {
    title: 'Спеціалісти конструктори',
    accent: 'від $1750/місяць',
    href: '/constructors'
  },
  {
    title: 'Спеціалісти інженери',
    accent: 'від $950/місяць',
    href: '/engineers'
  },
  {
    title: 'Спеціалісти архітектори',
    accent: 'від $950/місяць',
    href: '/architects'
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

export const blogCategoriesList = [
  'Всі новини',
  'NewStaff',
  'Аутстафінг',
  'Спеціалізації',
  'Події',
  'Спільнота'
];

export const contactsData = [
  {
    country: 'Україна',
    phone: '+380 (63) 145-47-78',
    email: 'info@newstaff.co.il'
  },
  {
    country: 'info@newstaff.co.il',
    phone: '+97 (250) 486-5294',
    email: 'engineers@newstaff.co.il'
  }
];

export const socialsData = [
  { label: 'Instagram', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'Telegram', href: '#' },
  { label: 'Twitter', href: '#' }
];

export const footerCopyrightLinks = [
  { label: 'Посібник користувача', href: '#' },
  { label: 'Політика конфіденційності', href: '#' },
  { label: 'Публічна оферта', href: '#' },
  { label: 'Налаштування Cookie', href: '#' }
];


export const heroes = {
  home: { subtitle: 'послуги аутстафінгу', text: '100+ компетентних, мотивованих і висококваліфікованих віддалених працівників, готові працювати для вас', button: 'Дивитись перелік спеціалістів' },
  about: { subtitle: 'Про нас', text: 'Ми поєднуємо лаконічність та професійність, кожен раз знаходячи оптимальне кадрове рішення до кожного бізнесу', button: '' },
  howItWorks: { subtitle: 'Як це працює', text: 'Ми наймаємо компетентних спеціалістів. Робимо відбір, контроль якості та онбординг. Надаючи їх компаніям, контролюємо їх ефективність та закриваємо базові потреби, в тому числі і юридичні. Після укладання договору, компанія-споживач отримує працівника майже одразу', button: '' }
}

export const inNumbers = [
  { number: 20, text: 'працюючих спеціалістів станом на сьогодні' },
  { number: 168, text: 'робочих місць планує створити NewStaff' },
  { number: null, text: ' ' },
  { number: null, text: ' ' },
  { number: 7, text: 'партнерів' },
  { number: 4, text: 'роки на ринку' }
]

export const ourWay = [
  { year: '2020', text: 'В 2020 році, ми відкрили напрямок діяльності в сфері аутстафінгу - надання для віддаленої роботи, якісних працівників з України в закордонні компанії. Наша діяльність обумовлена викликами, які прийшли в бізнес по всьому світу. ' },
  { year: '2021', text: 'З появою коронавіруса, запит на віддалену роботу виріс, багато компаній почали формувати штат віддалених працівників, для гнучкості. Відповідно підвищений попит на українських спеціалістів сформував наше бачення на наступні роки.' },
  { year: '2022', text: 'Проте війна внесла свої корективи в темп росту, але все ж зробила нас сильнішими, ми пройшли і продовжуєм шлях до цілі створення рабочих місць.' }
]

import member1 from '@/assets/images/team/member1.jpg'
import member2 from '@/assets/images/team/member2.jpg'
import member3 from '@/assets/images/team/member3.jpg'
import member4 from '@/assets/images/team/member4.jpg'
import member5 from '@/assets/images/team/member5.jpg'
import member6 from '@/assets/images/team/member6.jpg'

export const team = [
  { id: 1, img: member1, name: 'Олександр Коваленко', title: 'CEO', info: 'Олександр Коваленко - керуючий партнер, засновник аутстафінгової компанії NewStaff', linkedin: '#', twitter: '#' },
  { id: 2, img: member2, name: 'Олександр Коваленко', title: 'Technical Writer', info: 'Олександр Коваленко - керуючий партнер, засновник аутстафінгової компанії NewStaff', linkedin: '#', twitter: '#' },
  { id: 3, img: member3, name: 'Олександр Коваленко', title: 'Project Manager', info: 'Олександр Коваленко - керуючий партнер, засновник аутстафінгової компанії NewStaff', linkedin: '#', twitter: '#' },
  { id: 4, img: member4, name: 'Олександр Коваленко', title: 'Customer Support Specialist', info: 'Олександр Коваленко - керуючий партнер, засновник аутстафінгової компанії NewStaff', linkedin: '#', twitter: '#' },
  { id: 5, img: member5, name: 'Олександр Коваленко', title: 'Quality Assurance Engineer', info: 'Олександр Коваленко - керуючий партнер, засновник аутстафінгової компанії NewStaff', linkedin: '#', twitter: '#' },
  { id: 6, img: member6, name: 'Олександр Коваленко', title: 'Data Analyst', info: 'Олександр Коваленко - керуючий партнер, засновник аутстафінгової компанії NewStaff', linkedin: '#', twitter: '#' }]