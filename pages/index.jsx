import { widthLayout } from '@/layout/Layout';

import {
  Hero,
  Outstaff,
  SpecialistCards,
  Partners,
  Comparison,
  Cooperation,
  FeedBack
} from '@/components';

function Home() {
  return (
    <div>
      <Hero />
      <Outstaff />
      <SpecialistCards />
      <Partners />
      <Comparison />
      <Cooperation />
      <FeedBack page="home" />
    </div>
  );
}

export default widthLayout(Home);
