import ReactSelect from 'react-select';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { Ptag } from '..';

import s from './Select.module.scss';

// const options = [
//   { value: 'chocolate', label: 'Chocolate', icon?: <Icon /> },
// ];

const Option = ({ icon, label }) => (
  <div className={cx({ [s.optionPrimary]: !icon, [s.optionSecondary]: icon })}>
    {icon && icon}
    <span className={cx({ [s.optionLabel]: icon })}>{label}</span>
  </div>
);

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
    ...sProps
  } = props;
  return (
    <div
      className={cx(s.selectWrapper, { [s.disabled]: isDisabled }, className)}
    >
      <ReactSelect
        value={selectedOption}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        defaultMenuIsOpen
        formatOptionLabel={Option}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: 8,
            padding: '10px 16px',
            backgroundColor: '#E6E6E6',
            borderColor: isError ? '#FF666F' : '#E6E6E6',
            cursor: 'pointer',
            boxShadow: 'none',
            '&:hover': {
              borderColor: '#E6E6E6'
            }
          }),
          dropdownIndicator: (baseStyles, state) => ({
            ...baseStyles,
            color: '#515151',
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
            color: state.isFocused ? '#070707' : '#777777'
          }),
          input: (baseStyles, state) => ({
            ...baseStyles,
            color: '#070707'
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isSelected && '#F3F3F3;',
            color: '#515151',
            padding: 0,
            '&:hover': {
              backgroundColor: '#F3F3F3;'
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
  placeholder: PropTypes.string
};
