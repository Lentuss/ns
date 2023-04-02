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
  OftenQuestions
} from '@/components';

function Home() {
  return (
    <>
      <Hero />
      <Outstaff />
      <SpecialistCards />
      <Partners />
      <Comparison />
      <Cooperation />
      <LatestNews />
      <OftenQuestions />
      <FeedBack page="home" />
    </>
  );
}

export default widthLayout(Home);
