import { useRouter } from 'next/router';

import { widthLayout } from '@/layout/Layout';
import { Hero, FeedBack, WorkStages } from '@/components';
import { pageTypes } from '@/utils/const';

import s from '@/styles/pages/HowItWorks.module.scss';

function HowItWorks() {
  const { pathname } = useRouter();
  return (
    <div>
      <Hero className={s.hero} />
      <WorkStages />
      <FeedBack page="how-it-works" />
    </div>
  );
}

export default widthLayout(HowItWorks, pageTypes.howItWorks);
