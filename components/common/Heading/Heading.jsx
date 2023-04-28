import { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './Heading.module.scss';

export const Heading = memo(
  ({ children, className, color, size = 'm', style }) => {
    return (
      <p
        className={cx(s.heading, s[`heading-${size}`], className)}
        style={{ ...style, color }}
      >
        {children}
      </p>
    );
  }
);

Heading.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  children: PropTypes.node,
  color: PropTypes.string
};
