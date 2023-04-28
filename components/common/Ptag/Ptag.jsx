import { memo } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import s from './Ptag.module.scss';

export const Ptag = memo((props) => {
  const { className, size = 's', children, style, color, ...pProps } = props;

  return (
    <p
      className={cx(s.Ptag, s[`Ptag-${size}`], className)}
      style={{ ...style, color }}
      {...pProps}
    >
      {children}
    </p>
  );
});

Ptag.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['m', 's', 'l']),
  children: PropTypes.node.isRequired,
  color: PropTypes.string
};
