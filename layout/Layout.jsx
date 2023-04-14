import { useEffect, useState } from 'react';

import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { PatternsAnimationWrap, Wrapper } from '@/components/common';

import HomePattern1 from '@/assets/images/svg/patterns/header/home-1.svg';
import HomePattern2 from '@/assets/images/svg/patterns/header/home-2.svg';
import HomePattern3 from '@/assets/images/svg/patterns/header/home-3.svg';
import HomePattern4 from '@/assets/images/svg/patterns/header/home-4.svg';
import SpecialistsPattern from '@/assets/images/svg/patterns/header/specialists.svg';
import HowItWorksPattern from '@/assets/images/svg/patterns/header/how-it-works.svg';
import AboutPattern from '@/assets/images/svg/patterns/header/about.svg';
import CareersPattern from '@/assets/images/svg/patterns/header/careers.svg';

import { pageTypes } from '@/utils/const';

import s from './Layout.module.scss';

const Layout = ({ children, pageType }) => {
  const [isStartAnimation, setStartAnimation] = useState(false);
  const { about, careers, home, howItWorks, specialists } = pageTypes;

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  const renderHomePattern = () => (
    <PatternsAnimationWrap isShow={isStartAnimation}>
      <HomePattern1 className={s.headerPatterIcon} />
      <HomePattern2 className={s.headerPatterIcon} />
      <HomePattern3 className={s.headerPatterIcon} />
      <HomePattern4 className={s.headerPatterIcon} />
    </PatternsAnimationWrap>
  );

  const renderSpecialistPattern = () => (
    <PatternsAnimationWrap isShow={isStartAnimation}>
      <SpecialistsPattern className={s.headerPatterIcon} />
    </PatternsAnimationWrap>
  );

  const renderHowItWorksPattern = () => (
    <PatternsAnimationWrap isShow={isStartAnimation}>
      <HowItWorksPattern className={s.headerPatterIcon} />
    </PatternsAnimationWrap>
  );

  const renderAboutPattern = () => (
    <PatternsAnimationWrap isShow={isStartAnimation}>
      <AboutPattern className={s.headerPatterIcon} />
    </PatternsAnimationWrap>
  );

  const renderCareersPattern = () => (
    <PatternsAnimationWrap isShow={isStartAnimation}>
      <CareersPattern className={s.headerPatterIcon} />
    </PatternsAnimationWrap>
  );

  return (
    <>
      <Wrapper>
        {pageType === home && renderHomePattern()}
        {pageType === specialists && renderSpecialistPattern()}
        {pageType === howItWorks && renderHowItWorksPattern()}
        {pageType === about && renderAboutPattern()}
        {pageType === careers && renderCareersPattern()}
      </Wrapper>

      <Header className={s.header} />
      <main className={s.body}>{children}</main>
      <Footer className={s.footer} />
    </>
  );
};

export const widthLayout = (Component, pageType) => {
  return function widthLayoutComponent(props) {
    return (
      <Layout pageType={pageType}>
        <Component {...props} />
      </Layout>
    );
  };
};
