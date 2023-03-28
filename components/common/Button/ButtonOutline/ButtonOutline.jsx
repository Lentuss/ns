import cx from 'classnames';
import PropTypes from 'prop-types';

import { Button } from '../..';

import s from './ButtonOutline.module.scss';

export const ButtonOutline = (props) => {
  const { children, className, appearance = 'black', ...buttonProps } = props;

  return (
    <Button
      className={cx(s[`outline-${appearance}`], className)}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};

ButtonOutline.propTypes = {
  className: PropTypes.string,
  appearance: PropTypes.oneOf(['black', 'white']),
  children: PropTypes.node.isRequired
};
