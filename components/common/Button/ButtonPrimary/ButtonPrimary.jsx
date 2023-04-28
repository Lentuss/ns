import { memo } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { Button } from '../..';

import s from './ButtonPrimary.module.scss';

export const ButtonPrimary = memo((props) => {
  const {
    children,
    className,
    appearance = 'pink',
    isActive = false,
    isDisabled = false,
    ...buttonProps
  } = props;

  return (
    <Button
      className={cx(
        s.primary,
        s[`primary-${appearance}`],
        { [s.isActive]: isActive, [s.isDisabled]: isDisabled },
        className
      )}
      {...buttonProps}
    >
      {children}
    </Button>
  );
});

ButtonPrimary.propTypes = {
  className: PropTypes.string,
  appearance: PropTypes.oneOf(['pink', 'cyan', 'white', 'grey']),
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool
};
