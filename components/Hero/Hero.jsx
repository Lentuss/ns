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
import { HeroTitle } from './HeroTitle/HeroTitle'

import { heroes } from '@/utils/templateData';
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
              <AccentH className='heroAccent' location='main'>тут і зараз</AccentH>
            </Htag>
          </div>
          <div className={s.heroCall}>
            <Ptag size='m'>100+ компетентних, мотивованих і висококваліфікованих віддалених працівників, готові працювати для вас</Ptag>
            <ButtonPrimary href='#' className={s.heroBtn} appearance='pink'>Дивитись перелік спеціалістів
            </ButtonPrimary>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

