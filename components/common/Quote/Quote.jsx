import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Ptag } from '..';

import s from './Quote.module.scss';

export const Quote = ({ qoute, author, className }) => {
  return (
    <div className={cx(s.quote, className)}>
      <Ptag className={s.qouteText} size="l">
        “{qoute}”<strong className={s.quoteAuthor}>{author}</strong>
      </Ptag>
    </div>
  );
};

Quote.propTypes = {
  qoute: PropTypes.string,
  author: PropTypes.string,
  className: PropTypes.string
};
