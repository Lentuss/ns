import { useRouter } from 'next/router';

import { widthLayout } from '@/layout/Layout';
import { FeedBack, Hero, AboutNumbers, OurWay, Product, Team } from '@/components';

import { pageTypes } from '@/utils/const';

import s from '@/styles/pages/About.module.scss';

function About() {
  const { pathname } = useRouter();

  return (
    <>
      <Hero className={s.hero} />
      <AboutNumbers />
      <OurWay />
      <Product />
      <Team />

      <FeedBack page="about" />
    </>
  );
}

export default widthLayout(About, pageTypes.about);
