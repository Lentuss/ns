import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import cx from 'classnames';

import { Htag, Label, Ptag } from '@/components/common';

import { pinkPrimary } from '@/utils/const';

import s from './SpecialistTitle.module.scss';

export const SpecialistTitle = memo(
  ({ className, image, jobName, experience, sallary }) => {
    return (
      <div className={cx(s.specialistTitle, className)}>
        <Image className={s.specialistImage} src={image} alt="specialist" />

        <Htag className={s.specialistJobname} tag="h4">
          {jobName}
        </Htag>

        <div className={s.specialistExperience}>
          <Label name={experience} />
          {sallary && (
            <Ptag size="m" color={pinkPrimary}>
              {sallary}
            </Ptag>
          )}
        </div>
      </div>
    );
  }
);

SpecialistTitle.propTypes = {
  image: PropTypes.any,
  jobName: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired
};
