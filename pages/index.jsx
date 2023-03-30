import { widthLayout } from '@/layout/Layout';
import { Hero, Partners, Comparison } from '@/components'


function Home() {
  return <div>
    <Hero />
    <Partners />
    <Comparison />
  </div>;
}

export default widthLayout(Home);
