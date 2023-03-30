import { widthLayout } from '@/layout/Layout';
import {
  Outstaff,
  Hero,
  Partners,
  Comparison,
  SpecialistCards
} from '@/components';

function Home() {
  return (
    <div>
      <Hero />
      <Outstaff />
      <SpecialistCards />
      <Partners />
      <Comparison />
    </div>
  );
}

export default widthLayout(Home);
