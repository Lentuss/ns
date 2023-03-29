import { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { Ptag } from '..';

// import AlertIcon from '@/assets/images/svg/icons/alert.svg';

import AlertIcon from '@/assets/icons/alert.svg';

import s from './Input.module.scss';

export const Input = (props) => {
  const {
    type = 'text',
    placeholder,
    onChange,
    value = '',
    className,
    isError = false,
    disabled = false,
    errorMessage = 'Error'
  } = props;

  const [focused, setFocused] = useState(false);

  const onFocusHandler = () => setFocused(true);
  const onBlurHandler = () => setFocused(false);

  return (
    <label className={cx(s.label, className)}>
      <Ptag
        className={cx(s.inputPlaceholder, {
          [s.isFocused]: focused || value.length,
          [s.isDisabled]: disabled
        })}
        size="m"
      >
        {placeholder}
      </Ptag>

      <input
        className={cx(s.input, { [s.isError]: isError })}
        type={type}
        onChange={onChange}
        value={value}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        disabled={disabled}
      />

      {isError && <AlertIcon className={s.errorIcon} />}

      {isError && (
        <Ptag className={s.erorrMessage} size="s">
          {errorMessage}
        </Ptag>
      )}
    </label>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email']),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
  isError: PropTypes.bool,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string
};
