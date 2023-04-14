import { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './Switch.module.scss';

export const Switch = memo((props) => {
  const { isChecked = false, className, onChange, ...chProps } = props;
  return (
    <label className={cx(s.Switch, className)} labelfor="checkbox">
      <input
        className={s.Checkbox}
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <span className={s.Slider}></span>
    </label>
  );
});

Switch.propTypes = {
  isChecked: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func
};
