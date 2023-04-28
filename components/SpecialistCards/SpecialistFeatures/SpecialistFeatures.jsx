import PropTypes from 'prop-types';
import cx from 'classnames';

import { Label, Ptag, Subtitle } from '@/components/common';

import s from './SpecialistFeatures.module.scss';
import { memo } from 'react';

export const SpecialistFeatures = memo(({ className, skills }) => {
  return (
    <ul className={cx(s.SpecialistFeaturesList, className)}>
      {skills.map(({ label, list }) => (
        <li className={s.SpecialistFeatureItem} key={label}>
          <Subtitle className={s.SpecialistFeatureLabel} size="small">
            {label}
          </Subtitle>

          <Ptag size="m">
            {list.slice(0, 3).join(', ')}
            {list.length > 3 && (
              <Label
                className={s.SpecialistFeatureCount}
                name={`+${list.length - 3}`}
              />
            )}
          </Ptag>
        </li>
      ))}
    </ul>
  );
});

SpecialistFeatures.propTypes = {
  className: PropTypes.string,
  skills: PropTypes.array.isRequired
};
