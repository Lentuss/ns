import { useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import UploadIcon from '@/assets/icons/upload.svg';
import CheckIcon from '@/assets/icons/check.svg';

import s from './InputFile.module.scss';

export const InputFile = ({
  placeholder,
  className,
  isDisabled = false,
  fileHandler,
  uploadedFileName
}) => {
  const hiddenFileInput = useRef(null);

  const clickHandler = () => hiddenFileInput.current.click();

  const changeHandler = (event) => {
    const fileUploaded = event.target.files[0];

    fileHandler(fileUploaded);
  };

  return (
    <label
      className={cx(s.inputFile, { [s.isDisabled]: isDisabled }, className)}
    >
      <input
        className={s.inputFileInput}
        ref={hiddenFileInput}
        onChange={changeHandler}
        type="file"
        name="data[file]"
        placeholder={placeholder}
        accept="application/pdf"
      />
      <button
        className={s.inputFileButton}
        onClick={clickHandler}
        type="button"
      >
        {uploadedFileName ? (
          <span className={s.inputFileName}>{uploadedFileName}</span>
        ) : (
          placeholder
        )}

        {uploadedFileName ? <CheckIcon /> : <UploadIcon />}
      </button>
    </label>
  );
};

InputFile.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  fileHandler: PropTypes.func,
  uploadedFileName: PropTypes.string
};
