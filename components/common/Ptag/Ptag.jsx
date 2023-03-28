import { memo } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import s from './Ptag.module.scss';

export const Ptag = memo((props) => {
  const { className, size = 's', children, ...pProps } = props;

  return (
    <p className={cx(s.Ptag, s[`Ptag-${size}`], className)} {...pProps}>
      {children}
    </p>
  );
});

Ptag.propTypes = {
  classNames: PropTypes.string,
  tag: PropTypes.oneOf(['m', 's', 'l']),
  children: PropTypes.node.isRequired
};
