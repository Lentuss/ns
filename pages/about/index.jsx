import { useRouter } from 'next/router';

import { widthLayout } from '@/layout/Layout';
import { FeedBack, Hero, InNumbers, OurWay } from '@/components';

// import { specialistPageSections } from '@/utils/templateData';

import s from '@/styles/pages/About.module.scss';

function About() {
    const { pathname } = useRouter();
    console.log(pathname)
    return (
        <>
            <Hero />
            <InNumbers />
            <OurWay />

            <FeedBack page="about" />
        </>
    );
}

export default widthLayout(About);