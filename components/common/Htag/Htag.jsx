import { memo } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import s from './Htag.module.scss';

export const Htag = memo((props) => {
  const { className, tag: Tag = 'h1', children, ...hProps } = props;

  return (
    <Tag className={cx(s.Htag, s[`Htag-${Tag}`], className)} {...hProps}>
      {children}
    </Tag>
  );
});

Htag.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
  children: PropTypes.node.isRequired
};
