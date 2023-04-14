import { useRouter } from 'next/router';

import { widthLayout } from '@/layout/Layout';
import { Hero, FeedBack, WorkStages } from '@/components';

// import { specialistPageSections } from '@/utils/templateData';

// import s from '@/styles/pages/HowItWorks.module.scss';

function HowItWorks() {
    const { pathname } = useRouter();
    console.log(pathname)
    return (
        <div>
            <Hero />
            <WorkStages />
            <FeedBack page='works' />
        </div>
    );
}

export default widthLayout(HowItWorks, pageTypes.howItWorks);
