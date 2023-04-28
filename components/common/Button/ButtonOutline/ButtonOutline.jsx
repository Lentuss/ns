import { memo } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { Button } from '../..';

import s from './ButtonOutline.module.scss';

export const ButtonOutline = memo((props) => {
  const {
    children,
    className,
    appearance = 'black',
    isActive = false,
    isDisabled = false,
    ...buttonProps
  } = props;

  return (
    <Button
      className={cx(
        s.outline,
        s[`outline-${appearance}`],
        { [s.isActive]: isActive },
        { [s.isDisabled]: isDisabled },
        className
      )}
      {...buttonProps}
    >
      {children}
    </Button>
  );
});

ButtonOutline.propTypes = {
  className: PropTypes.string,
  appearance: PropTypes.oneOf(['black', 'white']),
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool
};
