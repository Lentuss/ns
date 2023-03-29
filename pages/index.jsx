import { widthLayout } from '@/layout/Layout';
import { Hero } from '@/components'


function Home() {
  return <div style={{ height: '100vh' }}>
    <Hero />
    Home

  </div>;
}

export default widthLayout(Home);
