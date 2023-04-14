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
import { AccentH, Htag, Subtitle, Wrapper } from '@/components/common';
import {
  HomeFormModal,
  SpecialistsFormModal,
  SpecialistsModal,
  SuccessModal
} from '@/components/modals';

import { pageTypes } from '@/utils/const';

import s from '@/styles/pages/Home.module.scss';

function Home() {
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
            <AccentH location="specialists">яких ви шукаєте</AccentH>
          </Htag>
          <SpecialistCards />
        </Wrapper>
      </section>

      <Partners className={s.homeSectionL} />
      <Comparison />
      <Practicing className={s.homeSectionL} />
      <Cooperation className={s.homeSectionL} />
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
