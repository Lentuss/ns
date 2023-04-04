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

import s from '@/styles/pages/Home.module.scss';
import { SpecialistsFormModal, SpecialistsModal } from '@/components/modals';

function Home() {
  return (
    <>
      <Hero />
      <Outstaff />

      <section className={s.specialistSection}>
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

      <Partners />
      <Comparison />
      <Practicing />
      <Cooperation />
      <LatestNews />
      <OftenQuestions />
      <FeedBack page="home" />

      <SpecialistsModal />
      <SpecialistsFormModal />
    </>
  );
}

export default widthLayout(Home);
