import { widthLayout } from '@/layout/Layout';
import { Hero, Partners } from '@/components'


function Home() {
  return <div>
    <Hero />
    <Partners />
    Home

  </div>;
}

export default widthLayout(Home);
