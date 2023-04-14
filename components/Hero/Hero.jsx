import React from 'react';
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

export const Hero = ({ className }) => {
  const { pathname } = useRouter();
  let page = pathname !== '/' ? pathname.slice(1) : 'home';
  if (page.includes('-')) {
    const words = page.split('-');
    const wordFormated = words.slice(1).map((word) => word.replace(word[0], word[0].toUpperCase()));
    page = [words[0], ...wordFormated].join('');
  }

  return (
    <div>
      <Wrapper>
        <div className={cx(s.heroInner, s[`heroInner-${page}`], className)}>
          <div className={s.heroHeading}>
            <Subtitle>{heroes[page].subtitle}</Subtitle>
            <Htag className={s.heroTitle}>
              <HeroTitle location={page} />
            </Htag>
          </div>
          <div className={s.heroCall}>
            <Ptag size="m">{heroes[page].text}</Ptag>
            {page === 'home' && <ButtonPrimary
              href={SPECIALISTS_PAGE_ROUTE}
              className={s.heroBtn}
              appearance="pink"
            >
              {heroes[page].button}
            </ButtonPrimary>}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
