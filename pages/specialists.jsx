import { widthLayout } from '@/layout/Layout';

import { SpecialistCards, FeedBack, SpecialistsHead } from '@/components';

function Home() {
  return (
    <>
      <SpecialistsHead />
      <SpecialistCards />
      <FeedBack page="home" />
    </>
  );
}

export default widthLayout(Home);
