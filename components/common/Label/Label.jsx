import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './Label.module.scss';

export const Label = (props) => {
  const { className, name, ...cProps } = props;
  return (
    <span className={cx(s.Label, className)} {...cProps}>
      {name}
    </span>
  );
};

Label.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired
};
