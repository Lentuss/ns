import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './Chip.module.scss';

export const Chip = (props) => {
  const { className, name, count, isActive, ...cProps } = props;
  return (
    <div
      className={cx(s.Chip, { [s.active]: isActive }, className)}
      {...cProps}
    >
      {name}
      <span className={s.Counter}>{count}</span>
    </div>
  );
};

Chip.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isActive: PropTypes.bool
};
