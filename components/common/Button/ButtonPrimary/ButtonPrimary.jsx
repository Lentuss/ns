import cx from 'classnames';
import PropTypes from 'prop-types';

import { Button } from '../..';

import s from './ButtonPrimary.module.scss';

export const ButtonPrimary = (props) => {
  const { children, className, appearance = 'pink', ...buttonProps } = props;

  return (
    <Button
      className={cx(s[`primary-${appearance}`], className)}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};

ButtonPrimary.propTypes = {
  className: PropTypes.string,
  appearance: PropTypes.oneOf(['pink', 'cyan', 'white', 'grey']),
  children: PropTypes.node.isRequired
};
