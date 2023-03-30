import { widthLayout } from '@/layout/Layout';
import { Outstaff, Hero, Partners, Comparison, Cooperation } from '@/components';

function Home() {
  return (
    <div>
      <Hero />
      <Outstaff />
      <Partners />
      <Comparison />
      <Cooperation />
    </div>
  );
}

export default widthLayout(Home);
