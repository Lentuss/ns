import cx from 'classnames';
import PropTypes from 'prop-types';

import { Button } from '../..';

import s from './ButtonText.module.scss';

export const ButtonText = (props) => {
  const { children, className, appearance = 'black', ...buttonProps } = props;

  return (
    <Button
      className={cx(s.buttonText, s[`text-${appearance}`], className)}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};

ButtonText.propTypes = {
  className: PropTypes.string,
  appearance: PropTypes.oneOf(['black', 'pink', 'white']),
  children: PropTypes.node.isRequired
};
