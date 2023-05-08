import cx from 'classnames';

import { widthLayout } from '@/layout/Layout';
import {
  Hero,
  Outstaff,
  SpecialistCards,
  Partners,
  Comparison,
  Cooperation,
  LatestNews,
  FeedBack,
  OftenQuestions,
  Practicing
} from '@/components';
import {
  AccentH,
  Htag,
  Subtitle,
  TextSpace,
  Wrapper
} from '@/components/common';
import {
  HomeFormModal,
  SpecialistsFormModal,
  SpecialistsModal,
  SuccessModal
} from '@/components/modals';

import { pageTypes } from '@/utils/const';

import s from '@/styles/pages/Home.module.scss';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();

  console.log('router', router);
  return (
    <>
      <Hero className={cx(s.hero, s.homeSectionM)} />
      <Outstaff className={s.homeSectionM} />

      <section className={s.homeSectionL}>
        <Wrapper>
          <Subtitle className={s.specialistSubTitle} size="thin">
            NewStaff 5 років на ринку
          </Subtitle>
          <Htag className={s.specialistTitle} tag="h2">
            Ми маємо спеціалістів,
            <TextSpace />
            <AccentH location="specialists">яких ви шукаєте</AccentH>
          </Htag>
          <SpecialistCards />
        </Wrapper>
      </section>

      <Partners className={s.homeSectionL} />
      <Comparison />
      <Practicing className={s.homeSectionL} />
      <Cooperation />
      <LatestNews className={s.homeSectionL} />
      <OftenQuestions className={s.oftenQuestions} />
      <FeedBack className={s.homeSectionL} page="home" />

      <HomeFormModal />
      <SuccessModal />
      <SpecialistsModal />
      <SpecialistsFormModal />
    </>
  );
}

export default widthLayout(Home, pageTypes.home);
