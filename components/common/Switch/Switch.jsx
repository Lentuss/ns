import React from 'react';
import PropTypes from 'prop-types';

import s from './Switch.module.scss';

export const Switch = (props) => {
  const { isChecked = false, ...chProps } = props;
  return (
    <label className={s.Switch} labelfor="checkbox">
      <input
        className={s.Checkbox}
        type="checkbox"
        id="checkbox"
        checked={isChecked}
      />
      <span className={s.Slider}></span>
    </label>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool
};
