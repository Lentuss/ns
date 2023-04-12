import { memo } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { Button } from '../..';

import s from './ButtonText.module.scss';

export const ButtonText = memo((props) => {
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
        s.buttonText,
        s[`text-${appearance}`],
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

ButtonText.propTypes = {
  className: PropTypes.string,
  appearance: PropTypes.oneOf(['black', 'pink', 'white']),
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool
};
