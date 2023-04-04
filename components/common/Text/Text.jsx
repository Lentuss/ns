import { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './Text.module.scss';

export const Text = memo(
  ({ children, className, color, size = 'm', style }) => {
    return (
      <p
        className={cx(s.text, s[`text-${size}`], className)}
        style={{ ...style, color }}
      >
        {children}
      </p>
    );
  }
);

Text.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  children: PropTypes.node,
  color: PropTypes.string
};
