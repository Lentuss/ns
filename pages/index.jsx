import { widthLayout } from '@/layout/Layout';
import { Outstaff, Hero, Partners, Comparison, Cooperation, FeedBack } from '@/components';

function Home() {
  return (
    <div>
      <Hero />
      <Outstaff />
      <Partners />
      <Comparison />
      <Cooperation />
      <FeedBack page='home' />
    </div>
  );
}

export default widthLayout(Home);
