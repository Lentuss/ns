import { memo } from 'react';
import cx from 'classnames';

import s from './Button.module.scss';

export const Button = memo((props) => {
  const {
    children,
    className,
    type = 'button',
    appearance = 'primary-pink',
    arrow = 'none',
    onClick,
    ...buttonProps
  } = props;
  return (
    <button
      type={type}
      className={cx(s.button, s[`button-${appearance}`], className)}
      onClick={onClick}
      {...buttonProps}
    >
      {children}
    </button>
  );
});

Button.propTypes = {
  classNames: PropTypes.string,
  appearance: PropTypes.oneOf([
    'primary-pink',
    'primary-cyan',
    'primary-white',
    'secondary',
    'outline-black',
    'outline-white',
    'text-black',
    'text-pink',
    'text-white'
  ]),
  children: PropTypes.node.isRequired
};
