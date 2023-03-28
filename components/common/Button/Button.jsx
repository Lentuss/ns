import { memo } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';

import s from './Button.module.scss';

export const Button = memo((props) => {
  const {
    children,
    className,
    type = 'button',
    onClick,
    href,
    disabled = false,
    ...bProps
  } = props;

  const Tag = href ? Link : 'button';

  return (
    <Tag
      type={type}
      className={cx(s.button, className)}
      onClick={onClick}
      href={href}
      disabled={disabled}
      {...bProps}
    >
      {children}
    </Tag>
  );
});

Button.propTypes = {
  classNames: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool
};
