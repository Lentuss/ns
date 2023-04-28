import { memo, useEffect, useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { Button } from '../..';

import s from './ButtonText.module.scss';

const BUTTON_STATE = {
  leave: 'leave',
  enter: 'enter'
};

export const ButtonText = memo((props) => {
  const {
    children,
    className,
    appearance = 'black',
    isActive = false,
    isDisabled = false,
    ...buttonProps
  } = props;
  const [hoverStateButton, setHoverStateButton] = useState('');

  useEffect(() => {
    let timeout = null;

    if (hoverStateButton === BUTTON_STATE.leave) {
      timeout = setTimeout(() => setHoverStateButton(''), 600);
    }

    return () => clearTimeout(timeout);
  }, [hoverStateButton]);

  return (
    <Button
      className={cx(
        s.buttonText,
        s[`text-${appearance}`],
        {
          [s.isActive]: isActive && !isDisabled,
          [s.isDisabled]: isDisabled,
          [s.isEnter]:
            hoverStateButton === BUTTON_STATE.enter && !isActive && !isDisabled,
          [s.isLeave]:
            hoverStateButton === BUTTON_STATE.leave && !isActive && !isDisabled
        },
        className
      )}
      onMouseEnter={() => setHoverStateButton(BUTTON_STATE.enter)}
      onMouseLeave={() => setHoverStateButton(BUTTON_STATE.leave)}
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
