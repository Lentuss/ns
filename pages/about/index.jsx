import { useRouter } from 'next/router';

import { widthLayout } from '@/layout/Layout';
import { FeedBack, Hero, InNumbers, OurWay, Product } from '@/components';

import s from '@/styles/pages/About.module.scss';

function About() {
    const { pathname } = useRouter();
    console.log(pathname)
    return (
        <>
            <Hero />
            <InNumbers />
            <OurWay />
            <Product />

            <FeedBack page="about" />
        </>
    );
}

export default widthLayout(About);