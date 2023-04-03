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

function Home() {
  return (
    <div>
      <Hero />
      <Outstaff />
      <SpecialistCards />
      <Partners />
      <Comparison />
      <Practicing />
      <Cooperation />
      <LatestNews />
      <OftenQuestions />
      <FeedBack page="home" />
    </div>
  );
}

export default widthLayout(Home);
