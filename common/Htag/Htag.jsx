import { memo } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import s from './Htag.module.scss';

export const Htag = memo((props) => {
  const { className, tag: Tag = 'h1', children, ...hProps } = props;

  return (
    <Tag className={cx(s[`Htag-${Tag}`], className)} {...hProps}>
      {children}
    </Tag>
  );
});

Htag.propTypes = {
  classNames: PropTypes.string,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3']),
  children: PropTypes.node.isRequired
};
