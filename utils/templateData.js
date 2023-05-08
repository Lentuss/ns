import {
  BLOG_PAGE_ROUTE,
  MAIN_PAGE_ROUTE,
  SPECIALISTS_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  CONTACTS_PAGE_ROUTE,
  CAREERS_PAGE_ROUTE,
  HOW_IT_WORKS_PAGE_ROUTE
} from './const';

export const navLinks = [
  { label: 'Головна', href: MAIN_PAGE_ROUTE },
  { label: 'Спеціалісти', href: SPECIALISTS_PAGE_ROUTE },
  { label: 'Як це працює', href: HOW_IT_WORKS_PAGE_ROUTE },
  { label: 'Про нас', href: ABOUT_PAGE_ROUTE },
  { label: 'Блог', href: BLOG_PAGE_ROUTE },
  { label: 'Контакти', href: CONTACTS_PAGE_ROUTE },
  { label: 'Вакансії', href: CAREERS_PAGE_ROUTE }
];

import GBFlagIcon from '@/assets/images/svg/flags/GB.svg';
import ILFlagIcon from '@/assets/images/svg/flags/IL.svg';
import UAFlagIcon from '@/assets/images/svg/flags/UA.svg';

export const langSelectOptions = [
  { value: 'ua', label: 'UA', icon: <UAFlagIcon /> },
  { value: 'en', label: 'EN', icon: <GBFlagIcon /> },
  { value: 'il', label: 'IL', icon: <ILFlagIcon /> }
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
    rating: 4,
    timeRead: '5 хвилин',
    href: '/1',
    image: latestNews1,
    desription:
      'У світі розробки програмного забезпечення існує давнє питання: що краще — ІТ-аутсорсинг чи аутстафінг і чи є різниця між ними? Простіше кажучи: що буде ефективніше — найняти зовнішню команду за кордоном чи замовити спеціальну команду розробки програмного забезпечення повного циклу в компанії, яка пропонує таку послугу.'
  },
  {
    title: '2022 у NewStaff: огляд року',
    author: 'Олена Іванчук',
    publicDate: '09.03.2023',
    tags: ['NewStaff'],
    rating: 3,
    timeRead: '5 хвилин',
    href: '/2',
    image: latestNews2,
    desription:
      'Простіше кажучи: що буде ефективніше — найняти зовнішню команду за кордоном чи замовити спеціальну команду розробки програмного забезпечення повного циклу в компанії, яка пропонує таку послугу.'
  },
  {
    title: 'Інженери програмного забезпечення NewStaff',
    author: 'Богдан Романчук',
    publicDate: '09.03.2023',
    tags: ['Cпеціалізації', 'Аутстафінг', 'NewStaff'],
    rating: 5,
    timeRead: '5 хвилин',
    href: '/3',
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
    href: '/engineers',
    labelText: 'Revit'
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
import { symbol } from 'prop-types';

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
    country: 'Iзраїль',
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

export const mainTextArticle = [
  {
    title: 'The Difference between Outsourcing and Outstaffing',
    text: `People often assume Outsourcing and Outstaffing are the same things, but they are not.
  Software Development Outsourcing refers to a model where a company hires workers from another company to get specific tasks done. The IT industry can be developing an app, a website, software product, etc. Often, Outsourcing means that the contractor will carry out the entire scope of work and not just one or two tasks. For instance, if you want to develop a mobile app, they will deal with everything, from technical requirements to maintenance and final checks.
  If you choose to outsource, you will get a project manager assigned to your project. They will interact with you and also handle the entire team.
  On the contrary, Outstaffing is a type of model in which a third-party worker or a team performs your work. The third party is officially employed by another company but performs the work for you. In Outstaffing, the customers control the entire scope of work, and they have direct access to the outsourced team. When you outsource, you have to manage the hired team and your own; however, the Outstaffing team will handle the payroll.
  This approach works best when you already have a development team but lack some expertise required for a particular project.`
  },
  {
    title: 'Outsourcing vs. Outstaffing: Looking for the Best Fit',
    text: `There is no one-size-fits-all, and no one can tell you what to opt for. Every situation is unique and requires consideration. To develop the best fit, you need first to evaluate the available resources at your disposal.
  If you don’t have a software department in your company and have enough funds to accomplish your project, Outsourcing is the option for you. On the contrary, your team doesn’t have enough strength, and you can seamlessly manage a third-party team and yours to complete a project, outstaffing is the best choice for you.
  When deciding between Outsourcing and outstaffing, you need to be aware of the general principles on which the models work.`
  },
  {
    title: 'Make Outsourcing and Outstaffing Great (Always): Useful Cues',
    text: `Whether it is Outsourcing or outstaffing, you need to determine the goal of your project. You need first to know which model you will choose. After hiring a team, you can then communicate your objectives to the vendor to get started. It would help if you then supplied them with a complete list of the details of your project. With more accurate information, they will let you know the cost and duration of the project.
  When picking vendors for your project, you need to consider a few essential points, the competence domain of your vendor, their portfolio, past client’s reviews, etc. Other crucial considerations include language barriers, timezone, work ethics, cultural background, etc. This will narrow down the options for you to decide on the best company.
  It may sound tempting, but you should disregard the vendor who charges the lowest rates. You cannot expect to get quality at thrift prices; hence, such a decision may make you compromise on the key performance indicators of your software product.
  In the beginning, if you know how much you will have to pay, you will have a sense of control and safety since all upcharges and financial risks will be handled by your outsourcer only. However, if you relieve yourself from all the worries, you may face other concerns. For instance, in the fixed cost, the vendor may keep a risk margin along, and hence you end up paying more. Also, if the sum is stipulated initially, the developers will limit their creativity and try to fit in the budget with no improvements.
  The best recipe to get financial, technical, communication, management, and all possible moments regulated, signing a contract is a must. This document will cover all necessary details of the project and will be signed by both parties.
  If you cooperate with a vendor for the first time, we recommend starting with an assignment of smaller scope. If you are satisfied with the results, you can continue obtaining the benefits of software development outsourcing.
  Don’t make the entire payment upfront. A sensible move is to make an advance payment of one-third of the final amount and then divide the remaining amount to complete milestones. In this way, they will also work towards meeting deadlines.
  When you choose outstaffing, this tip is essential. When you explain the potential benefits to your regular employees, they will accept, and the resistance of introducing new temporary employees will be reduced. It further helps to enhance the efficacy of the workflow.
  Communication is essential when cooperating with remote teams. If it fails, the project may be defeated. To prevent such mishaps, you should establish effective communication channels with which both sides are comfortable.
  It is critical to integrate a support clause specifying the possible cooperation of the parties after the completion of a project. By doing so, you will not have to look for another vendor to get the required fixes done or get something corrected after the product launch.`
  }
];

export const commentsData = [
  {
    id: 1,
    author: 'Дмитро Степанчук',
    publishDate: '09.03.2023',
    rating: 5,
    comment:
      'The benefits of outsourcing and outstaffing are that they can help you save money by hiring people who are cheaper than your staff, they can also be used when your own team lacks skills, or if the team lacks the time to complete the work.',
    likes: 4,
    answers: []
  },
  {
    id: 2,
    author: 'Дмитро Степанчук',
    publishDate: '09.03.2023',
    rating: 5,
    comment:
      'The benefits of outsourcing and outstaffing are that they can help you save money by hiring people who are cheaper than your staff, they can also be used when your own team lacks skills, or if the team lacks the time to complete the work.',
    likes: 4,
    answers: [
      {
        id: 21,
        author: 'Дмитро Степанчук',
        publishDate: '09.03.2023',
        rating: 5,
        comment:
          'The benefits of outsourcing and outstaffing are that they can help you save money by hiring people who are cheaper than your staff, they can also be used when your own team lacks skills, or if the team lacks the time to complete the work.',
        likes: 4
      }
    ]
  }
];

export const articleNewsMini = [
  {
    publishDate: '09.03.2023',
    timeRead: '5 хвилин',
    title: 'Аутсорсинг або аутстафінг. 10 ефективних порад',
    id: 1
  },
  {
    publishDate: '09.03.2023',
    timeRead: '5 хвилин',
    title: '2022 у NewStaff: огляд року',
    id: 2
  },
  {
    publishDate: '09.03.2023',
    timeRead: '5 хвилин',
    title: 'Інженери програмного забезпечення NewStaff',
    id: 3
  }
];

export const heroes = {
  home: {
    subtitle: 'послуги аутстафінгу',
    text: '100+ компетентних, мотивованих і висококваліфікованих віддалених працівників, готові працювати для вас',
    button: 'Дивитись перелік спеціалістів'
  },
  about: {
    subtitle: 'Про нас',
    text: 'Ми поєднуємо лаконічність та професійність, кожен раз знаходячи оптимальне кадрове рішення до кожного бізнесу',
    button: ''
  },
  howItWorks: {
    subtitle: 'Як це працює',
    text: 'Ми наймаємо компетентних спеціалістів. Робимо відбір, контроль якості та онбординг. Надаючи їх компаніям, контролюємо їх ефективність та закриваємо базові потреби, в тому числі і юридичні. Після укладання договору, компанія-споживач отримує працівника майже одразу',
    button: ''
  }
};

export const inNumbers = [
  { number: 20, text: 'працюючих спеціалістів станом на сьогодні' },
  { number: 168, text: 'робочих місць планує створити NewStaff' },
  { number: null, text: ' ' },
  { number: null, text: ' ' },
  { number: 7, text: 'партнерів' },
  { number: 4, text: 'роки на ринку' }
];

export const ourWay = [
  {
    year: '2020',
    text: 'Cтворення нового направлення NewStaff - аутстафінгу - надання компанії готового дистанційного співробітника закриваючи всі юридичні та матеріальні питання пов‘язані з його утриманням та податками.'
  },
  {
    year: '2021',
    text: 'Під час пандемії потреба у онлайн працівниках відчутно зросла і через це багато компаній вирішили створити штат віддалених працівників. NewStaff щомісяця закривав біля трьох вакансій ізраїльських копаній і цей показник збільшується з кожним разом!'
  },
  {
    year: '2022',
    text: 'Після початку війни з росією міжнародні компанії більше зацікавилися українськими співробітниками. Наша компанія пропонує до найму кваліфікованих, відповідальних працівників без зайвих проблем щодо організації найму в офіс.'
  }
];

export const contactInfoData = {
  legalInfo: [
    {
      label: 'ТОВ',
      info: '"НЬЮСТАФФ"'
    },
    {
      label: 'Юридична адреса',
      info: 'Україна, 04108, Київ, Проспект Правди 9-Б, кв. 132'
    },
    {
      label: 'ЄДРПОУ',
      info: '37571469'
    },
    {
      label: 'IBAN',
      info: 'UA391342178878366161231831936'
    },
    {
      label: 'Privatbank SWIFT CODE',
      info: 'PBANUA2X'
    },
    {
      label: 'SWIFT CODE',
      info: 'CHASUS33'
    }
  ],
  legalInfo: [
    {
      label: 'ТОВ',
      info: '"НЬЮСТАФФ"'
    },
    {
      label: 'Юридична адреса',
      info: 'Україна, 04108, Київ, Проспект Правди 9-Б, кв. 132'
    },
    {
      label: 'ЄДРПОУ',
      info: '37571469'
    },
    {
      label: 'IBAN',
      info: 'UA391342178878366161231831936'
    },
    {
      label: 'Privatbank SWIFT CODE',
      info: 'PBANUA2X'
    },
    {
      label: 'SWIFT CODE',
      info: 'CHASUS33'
    }
  ],
  emailsInfo: [
    {
      label: 'HR',
      info: 'hr@newstaff.co.il'
    },
    {
      label: 'Finance',
      info: 'finance@newstaff.co.il'
    },
    {
      label: 'Lawyer',
      info: 'lawyer@newstaff.co.il'
    }
  ]
};

export const vacancyCardListData = [
  {
    title: 'Архітектор-візуалізатор',
    experiense: '5+ років досвіду',
    infoTags: ['Повна зайнятість', 'Англійська B2', 'Київ'],
    description:
      'Архітектурний супровід реалізації девелоперських проектів на всіх стадіях, від концепції до благоустрою та озеленення території.',
    id: 1
  },
  {
    title: 'Розробник Python',
    experiense: '5+ років досвіду',
    infoTags: ['Повна зайнятість', 'Англійська B2', 'Київ'],
    description:
      'Архітектурний супровід реалізації девелоперських проектів на всіх стадіях, від концепції до благоустрою та озеленення території.',
    id: 2
  },
  {
    title: "Дизайн інтер'єру",
    experiense: '5+ років досвіду',
    infoTags: ['Повна зайнятість', 'Англійська B2', 'Київ'],
    description:
      'Архітектурний супровід реалізації девелоперських проектів на всіх стадіях, від концепції до благоустрою та озеленення території.',
    id: 3
  },
  {
    title: 'Консультант зі сталого розвитку',
    experiense: '5+ років досвіду',
    infoTags: ['Повна зайнятість', 'Англійська B2', 'Київ'],
    description:
      'Архітектурний супровід реалізації девелоперських проектів на всіх стадіях, від концепції до благоустрою та озеленення території.',
    id: 4
  },
  {
    title: 'Керівник проекту',
    experiense: '5+ років досвіду',
    infoTags: ['Повна зайнятість', 'Англійська B2', 'Київ'],
    description:
      'Архітектурний супровід реалізації девелоперських проектів на всіх стадіях, від концепції до благоустрою та озеленення території.',
    id: 5
  },
  {
    title: 'Молодший архітектурний дизайнер',
    experiense: '5+ років досвіду',
    infoTags: ['Повна зайнятість', 'Англійська B2', 'Київ'],
    description:
      'Архітектурний супровід реалізації девелоперських проектів на всіх стадіях, від концепції до благоустрою та озеленення території.',
    id: 6
  }
];

export const vacancyDescriptionData = [
  {
    title: 'Про NewStaff',
    description: `Якщо ти спеціаліст у своїй справі, хочеш стати частиною крутої команди та реалізувати свій потенціал, бути в курсі трендів індустрії, прагнеш навчитися чогось нового та готовий обмінятися своїм досвідом — приєднуйся! Ми цінуємо та поважаємо наших співробітників, створюємо середовище, де можна навчатися та зростати.
    Ми розглядаємо різні діапазони досвіду, від одного (1) рокіу і більше, а заробітна плата буде відповідати досвіду.`
  },
  {
    title: 'Опис вакансії',
    description: `Якщо ти спеціаліст у своїй справі, хочеш стати частиною крутої команди та реалізувати свій потенціал, бути в курсі трендів індустрії, прагнеш навчитися чогось нового та готовий обмінятися своїм досвідом — приєднуйся! Ми цінуємо та поважаємо наших співробітників, створюємо середовище, де можна навчатися та зростати.
    Ми розглядаємо різні діапазони досвіду, від одного (1) рокіу і більше, а заробітна плата буде відповідати досвіду.`
  },
  {
    title: 'Що ви будете робити',
    description: `Якщо ти спеціаліст у своїй справі, хочеш стати частиною крутої команди та реалізувати свій потенціал, бути в курсі трендів індустрії, прагнеш навчитися чогось нового та готовий обмінятися своїм досвідом — приєднуйся!`,
    listData: [
      'Розробка проєктної документації',
      'Робота з деталям та системами, підбір обладнання',
      'Знання норм та специфікацій країн СНГ та Європи',
      'Гнучке адаптивне мислення',
      'Креативні підходи для вирішення стандартних та нестандартних завдань чи проєктів',
      'Використання технологій BIM 360, робота в “хмарі”',
      'Колективне програмування та індивідуальні проєкти в глобальному проєкті'
    ]
  },
  {
    title: 'Що ми пропонуємо',
    description: `Ми розглядаємо різні діапазони досвіду, від одного (1) рокіу і більше, а заробітна плата буде відповідати досвіду.`,
    listData: [
      'Розробка проєктної документації',
      'Робота з деталям та системами, підбір обладнання',
      'Знання норм та специфікацій країн СНГ та Європи',
      'Гнучке адаптивне мислення',
      'Креативні підходи для вирішення стандартних та нестандартних завдань чи проєктів',
      'Використання технологій BIM 360, робота в “хмарі”',
      'Колективне програмування та індивідуальні проєкти в глобальному проєкті'
    ]
  }
];

export const cookiesModalConfigData = [
  {
    id: 1,
    title: 'Необхідні',
    description: `Ці файли cookie необхідні для функціонування веб-сайту, і їх не можна вимкнути в наших системах. Зазвичай вони встановлюються лише у відповідь на виконані вами дії, які є запитом на надання послуг, наприклад налаштування ваших налаштувань конфіденційності, вхід або заповнення форм. Ви можете налаштувати свій браузер на блокування цих файлів cookie або сповіщення про них, але деякі частини сайту не працюватимуть. Ці файли cookie не зберігають жодної особистої інформації.`,
    isAlwaysActive: true
  },
  {
    id: 2,
    title: 'Маркетинг',
    description: `Ці елементи використовуються для показу реклами, яка більше відповідає вам і вашим інтересам. Вони також можуть використовуватися для обмеження кількості переглядів реклами та вимірювання ефективності рекламних кампаній. Рекламні мережі зазвичай розміщують їх з дозволу оператора сайту.`,
    isAlwaysActive: false
  },
  {
    id: 3,
    title: 'Персоналізація',
    description: `Ці елементи дозволяють веб-сайту запам’ятовувати ваш вибір (наприклад, ваше ім’я користувача, мову чи регіон, у якому ви перебуваєте), і надавати розширені, більш персональні функції. Наприклад, веб-сайт може надавати вам місцеві прогнози погоди або новини про дорожній рух, зберігаючи дані про ваше поточне місцезнаходження.`,
    isAlwaysActive: false
  },
  {
    id: 4,
    title: 'Аналітика',
    description: `Ці елементи допомагають оператору веб-сайту зрозуміти, як працює його веб-сайт, як відвідувачі взаємодіють із сайтом і чи можуть бути технічні проблеми. Цей тип зберігання зазвичай не збирає інформацію, яка ідентифікує відвідувача.`,
    isAlwaysActive: false
  }
];

import member1 from '@/assets/images/team/member1.jpg';
import member2 from '@/assets/images/team/member2.jpg';
import member3 from '@/assets/images/team/member3.jpg';
import member4 from '@/assets/images/team/member4.jpg';
import member5 from '@/assets/images/team/member5.jpg';
import member6 from '@/assets/images/team/member6.jpg';

export const team = [
  {
    id: 1,
    img: member1,
    name: "Тарасенко В'ячеслав",
    title: 'Co-CEO',
    info: 'Керівник, партнер та співзасновник компанії NewStaff',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 2,
    img: member2,
    name: 'Володимир Лодня',
    title: 'Co-CEO',
    info: 'Керівник, партнер та співзасновник компанії NewStaff',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 3,
    img: member3,
    name: 'Бевз Андрій',
    title: 'Marketing Manager',
    info: 'Просто хлопець в рубашці. Завантажив Інстаграм минулого тижня',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 4,
    img: member4,
    name: 'Варварчук Ольга',
    title: 'HR Manager ',
    info: 'Підбір персоналу, організація робочого процесу, event менеджмент',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 5,
    img: member5,
    name: 'Сергій Баранік',
    title: 'Фінансовий консультант',
    info: 'Надає консультації та рекомендації щодо управління бізнес-фінансами',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 6,
    img: member6,
    name: 'Віталій Пасько',
    title: 'Юридичний консультант',
    info: 'Надає юридичні консультації та рекомендації з різних питань в області права',
    linkedin: '#',
    twitter: '#'
  }
];

export const specialistModalSkills = [
  'Розробка проєктної документації',
  'Робота з деталям та системами, підбір обладнання',
  'Знання норм та специфікацій країн СНГ та Європи'
];

export const contentArticleData = [
  'The Difference between Outsourcing and Outstaffing',
  'Outsourcing vs. Outstaffing: Looking for the Best Fit',
  'How does Outsourcing work?'
];
