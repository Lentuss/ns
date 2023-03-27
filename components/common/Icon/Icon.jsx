import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import sprite from 'assets/icons/_sprite.svg';

export const Icon = ({
  classNames = '',
  icon = '',
  size,
  color = '#000000'
}) => {
  const href = `${sprite}#${icon}`;
  const style = {
    fontSize: size + 'px',
    color
  };
  const className = cx(`icon icon-${icon}`, classNames);
  console.log('href', sprite);
  return (
    <svg style={style} className={className}>
      <use xlinkHref={href}></use>
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  classNames: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string
};
