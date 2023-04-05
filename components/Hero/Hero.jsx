import React from 'react';

import s from './Hero.module.scss';

import {
  Wrapper,
  Htag,
  Ptag,
  AccentH,
  Subtitle,
  ButtonPrimary
} from '@/components/common';
import { SPECIALISTS_PAGE_ROUTE } from '@/utils/const';

export const Hero = () => {
  return (
    <div>
      <Wrapper>
        <div className={s.heroInner}>
          <div className={s.heroHeading}>
            <Subtitle>послуги аутстафінгу</Subtitle>
            <Htag className={s.heroTitle}>
              <span className={s.start}>Надаємо</span>
              <span>українських</span>
              <span className={s.start}>спеціалістів</span>
              <AccentH className="heroAccent" location="main">
                тут і зараз
              </AccentH>
            </Htag>
          </div>
          <div className={s.heroCall}>
            <Ptag size="m">
              100+ компетентних, мотивованих і висококваліфікованих віддалених
              працівників, готові працювати для вас
            </Ptag>
            <ButtonPrimary
              href={SPECIALISTS_PAGE_ROUTE}
              className={s.heroBtn}
              appearance="pink"
            >
              Дивитись перелік спеціалістів
            </ButtonPrimary>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
