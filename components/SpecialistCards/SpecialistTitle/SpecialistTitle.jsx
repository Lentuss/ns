import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import cx from 'classnames';

import { Htag, Label } from '@/components/common';

import s from './SpecialistTitle.module.scss';

export const SpecialistTitle = ({ className, image, jobName, experience }) => {
  return (
    <div className={cx(s.specialistTitle, className)}>
      <Image className={s.specialistImage} src={image} alt="specialist" />

      <Htag className={s.specialistJobname} tag="h4">
        {jobName}
      </Htag>

      <Label className={s.specialistExperience} name={experience} />
    </div>
  );
};

SpecialistTitle.propTypes = {
  image: PropTypes.any,
  jobName: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired
};
