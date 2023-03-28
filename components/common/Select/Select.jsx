import ReactSelect from 'react-select';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { Ptag } from '..';

import {
  black100,
  black1000,
  black200,
  black700,
  black800,
  pinkPrimary
} from '@/utils/const';

import s from './Select.module.scss';

// const options = [
//   { value: 'chocolate', label: 'Chocolate', icon?: <Icon /> },
// ];

export const Select = (props) => {
  const {
    options,
    selectedOption,
    className,
    onChange,
    isError = false,
    errorMsg = 'Error',
    isDisabled = false,
    placeholder = 'Select',
    isLangMode = false,
    isSearchable = true,
    ...sProps
  } = props;

  const Option = ({ icon, label }) => (
    <div
      className={cx({
        [s.optionPrimary]: !isLangMode,
        [s.optionSecondary]: isLangMode
      })}
    >
      {icon && icon}
      <span className={cx({ [s.optionLabel]: isLangMode })}>{label}</span>
    </div>
  );

  return (
    <div
      className={cx(s.selectWrapper, { [s.disabled]: isDisabled }, className)}
    >
      <ReactSelect
        value={selectedOption}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        // defaultMenuIsOpen
        formatOptionLabel={Option}
        isSearchable={isSearchable}
        instanceId={placeholder}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: 8,
            padding: isLangMode ? '0' : '10px 16px',
            backgroundColor: isLangMode ? 'transparent' : black200,
            borderWidth: isLangMode ? 0 : 1,
            borderColor: isError ? pinkPrimary : black200,
            cursor: 'pointer',
            boxShadow: 'none',
            '&:hover': {
              borderColor: black200
            }
          }),
          dropdownIndicator: (baseStyles, state) => ({
            ...baseStyles,
            color: black800,
            transform: state.isFocused ? 'rotate(0)' : 'rotate(-180deg)',
            transition: 'transform 0.2s ease',
            padding: 0
          }),
          valueContainer: (baseStyles, state) => ({
            ...baseStyles,
            padding: 0
          }),
          indicatorSeparator: (baseStyles, state) => ({
            ...baseStyles,
            display: 'none'
          }),
          placeholder: (baseStyles, state) => ({
            ...baseStyles,
            color: state.isFocused ? black1000 : black700
          }),
          input: (baseStyles, state) => ({
            ...baseStyles,
            color: black1000
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isSelected && black100,
            color: black800,
            padding: 0,
            '&:hover': {
              backgroundColor: black100
            }
          })
        }}
        {...sProps}
      />

      {isError && (
        <Ptag className={s.errorMessage} size="s">
          {errorMsg}
        </Ptag>
      )}
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.object,
  className: PropTypes.string,
  onChange: PropTypes.func,
  isError: PropTypes.bool,
  errorMsg: PropTypes.string,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string,
  isLangMode: PropTypes.bool,
  isSearchable: PropTypes.bool
};
