import React from 'react';
import PropTypes from 'prop-types';

import { AccentH, ButtonPrimary, Htag, Subtitle, Wrapper } from '../common';
import { SpecialistTitle } from './SpecialistTitle/SpecialistTitle';
import { SpecialistFeatures } from './SpecialistFeatures/SpecialistFeatures';

import { specialistCards } from '@/utils/templateData';

import s from './SpecialistCards.module.scss';

export const SpecialistCards = (props) => {
  return (
    <div className={s.specialistCards}>
      <Wrapper>
        <Subtitle className={s.specialistSubTitle} size="thin">
          NewStaff 5 років на ринку
        </Subtitle>
        <Htag className={s.specialistTitle} tag="h2">
          Ми маємо спеціалістів,
          <AccentH location="specialists">яких ви шукаєте</AccentH>
        </Htag>

        <ul className={s.specialistList}>
          {specialistCards.map(
            ({ id, experiense, features, imageSrc, jobName }) => (
              <li className={s.specialistItem} key={id}>
                <SpecialistTitle
                  className={s.specialistItemTitle}
                  experience={experiense}
                  image={imageSrc}
                  jobName={jobName}
                />
                <SpecialistFeatures
                  className={s.specialistItemFeatures}
                  skills={features}
                />

                <div className={s.specialistItemButtons}>
                  <ButtonPrimary appearance="grey">Більше</ButtonPrimary>
                  <ButtonPrimary>Обрати</ButtonPrimary>
                </div>
              </li>
            )
          )}
        </ul>
      </Wrapper>
    </div>
  );
};

SpecialistCards.propTypes = {};
