import React from 'react';
import PropTypes from 'prop-types';

import s from './HeroTitle.module.scss';

import { AccentH } from '@/components/common';

export const HeroTitle = (props) => {
  const { location, className } = props;

  return (
    <>
      {location === 'home' && (
        <>
          <span className={s.start}>Надаємо</span>
          <span>українських</span>
          <span className={s.start}>спеціалістів</span>
          <AccentH location="main">тут і зараз</AccentH>
        </>
      )}
      {location === 'about' && (
        <>
          <AccentH className={s.start} location="about">
            NewStaff
          </AccentH>
          <span>з нами ріст</span>
          <span className={s.start}>у всьому</span>
        </>
      )}
      {location === 'howItWorks' && (
        <>
          <span className={s.start}>Як ми працюємо,</span>
          <AccentH location="works">в двох словах</AccentH>
        </>
      )}
    </>
  );
};

HeroTitle.propTypes = {
  location: PropTypes.string.isRequired,
  className: PropTypes.string
};
