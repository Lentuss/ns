import PropTypes from 'prop-types';
import cx from 'classnames';

import UploadIcon from '@/assets/icons/upload.svg';

import s from './InputDownload.module.scss';

export const InputDownload = ({ placeholder, className }) => {
  return (
    <label className={cx(s.inputDownload, className)}>
      <input
        className={s.inputDownloadInput}
        type="file"
        name="data[file]"
        placeholder={placeholder}
      />
      <button className={s.inputDownloadButton}>
        {placeholder}

        <UploadIcon />
      </button>
    </label>
  );
};

InputDownload.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string
};
