import { memo } from 'react';
import { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { Ptag } from '..';

import AlertIcon from '@/assets/icons/alert.svg';
import SizingIcon from '@/assets/icons/sizing.svg';

import s from './Input.module.scss';

export const Input = memo((props) => {
  const {
    type = 'text',
    placeholder,
    onChange = () => {},
    value = '',
    className,
    name = '',
    isError = false,
    disabled = false,
    errorMessage = 'Error'
  } = props;

  const [focused, setFocused] = useState(false);

  const onFocusHandler = () => setFocused(true);
  const onBlurHandler = () => setFocused(false);

  const isTextarea = type === 'textarea';
  // const InputType = isTextarea ? 'textarea' : 'input';

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
        className={cx(s.input, {
          [s.isError]: isError
          // [s.textArea]: isTextarea
        })}
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

      {isTextarea && <SizingIcon className={s.sizingIcon} />}
    </label>
  );
});

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'textarea']),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
  isError: PropTypes.bool,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string
};
