import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ButtonPrimary, Wrapper } from '../common';
import { SpecialistTitle } from './SpecialistTitle/SpecialistTitle';
import { SpecialistFeatures } from './SpecialistFeatures/SpecialistFeatures';

import { specialistCards } from '@/utils/templateData';

import s from './SpecialistCards.module.scss';

export const SpecialistCards = (props) => {
  const { className } = props;

  return (
    <ul className={className}>
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
  );
};

SpecialistCards.propTypes = {
  className: PropTypes.string
};
