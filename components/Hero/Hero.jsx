import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';

import s from './Hero.module.scss';

import {
  Wrapper,
  Htag,
  Ptag,
  Subtitle,
  ButtonPrimary
} from '@/components/common';
import { HeroTitle } from './HeroTitle/HeroTitle';

import { heroes } from '@/utils/templateData';
import { SPECIALISTS_PAGE_ROUTE } from '@/utils/const';
import { useMoveInAnimation, useFormattedPageName } from '@/hooks';

export const Hero = ({ className }) => {

  const heroTextRef = useRef(null);
  const startAnimation = useMoveInAnimation(heroTextRef);
  const page = useFormattedPageName();

  return (
    <div className={s.hero}>
      <Wrapper>
        <div
          className={cx(
            s.heroInner,
            s[`heroInner-${page}`],
            { [s.isAnimation]: startAnimation },
            className
          )}
        >
          <div className={s.heroHeading}>
            <Subtitle>{heroes[page].subtitle}</Subtitle>
            <Htag className={s.heroTitle}>
              <HeroTitle location={page} />
            </Htag>
          </div>
          <div className={s.heroText} ref={heroTextRef}>
            <Ptag size="m">{heroes[page].text}</Ptag>
            {page === 'home' && (
              <ButtonPrimary
                href={SPECIALISTS_PAGE_ROUTE}
                className={s.heroBtn}
                appearance="pink"
              >
                {heroes[page].button}
              </ButtonPrimary>
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
