import { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Ptag } from '../common';

import s from './ArticleReadInfo.module.scss';

export const ArticleReadInfo = ({ info = [], className, size = 'm' }) => {
  return (
    <Ptag className={cx(s.articleInfo, className)} size={size}>
      {info.map((i, idx) => (
        <Fragment key={i}>
          <span>{i}</span>
          {idx < info.length - 1 && <span>|</span>}
        </Fragment>
      ))}
    </Ptag>
  );
};

ArticleReadInfo.propTypes = {
  info: PropTypes.array,
  className: PropTypes.string,
  size: PropTypes.string
};
