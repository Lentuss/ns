import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ButtonOutline } from '../common';

import { socialsData } from '@/utils/templateData';

import s from './FooterSocials.module.scss';

export const FooterSocials = ({ className }) => {
  return (
    <div className={cx(s.footerSocials, className)}>
      {socialsData.map(({ label, href }) => (
        <ButtonOutline
          appearance="white"
          className={s.footerSocialsBtn}
          href={href}
          key={label}
        >
          {label}
        </ButtonOutline>
      ))}
    </div>
  );
};

FooterSocials.propTypes = {
  className: PropTypes.string
};
