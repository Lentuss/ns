import { widthLayout } from '@/layout/Layout';
import { Outstaff, Hero, Partners, Comparison } from '@/components';

function Home() {
  return (
    <div>
      <Hero />
      <Outstaff />
      <Partners />
      <Comparison />
    </div>
  );
}

export default widthLayout(Home);
