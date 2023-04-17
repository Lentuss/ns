import { memo, useRef, useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { useMoveInAnimation, useObserver } from '@/hooks';

import s from './Htag.module.scss';

export const Htag = memo((props) => {
  const { className, tag: Tag = 'h1', children, ...hProps } = props;
  const hTagRef = useRef(null);

  const startAnimation = useMoveInAnimation(hTagRef, 0, Tag === 'h2');

  return (
    <Tag
      className={cx(
        s.Htag,
        s[`Htag-${Tag}`],
        { [s.isAnimation]: startAnimation },
        className
      )}
      ref={hTagRef}
      {...hProps}
    >
      {children}
    </Tag>
  );
});

Htag.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.node.isRequired
};
