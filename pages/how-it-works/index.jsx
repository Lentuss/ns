import { useRouter } from 'next/router';

import { widthLayout } from '@/layout/Layout';
import { FeedBack } from '@/components';
import { pageTypes } from '@/utils/const';

// import { specialistPageSections } from '@/utils/templateData';

// import s from '@/styles/pages/HowItWorks.module.scss';

function HowItWorks() {
  const { pathname } = useRouter();
  console.log(pathname);
  return <>howww</>;
}

export default widthLayout(HowItWorks, pageTypes.howItWorks);
