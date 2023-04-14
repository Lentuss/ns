import { Children, cloneElement } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import s from './PatternsAnimationWrap.module.scss';

export const PatternsAnimationWrap = ({ children, isShow }) => {
  const arrayChildren = Children.toArray(children);

  return (
    <>
      {arrayChildren.map((child, idx) => {
        return cloneElement(child, {
          className: cx(child.props.className, s.pattern, {
            [s.isShow]: isShow
          }),
          style: {
            transitionDelay: isShow
              ? `0.${idx + 1}s`
              : `0.${arrayChildren.length - idx}s`
          }
        });
      })}
    </>
  );
};

PatternsAnimationWrap.propTypes = {
  isShow: PropTypes.bool,
  children: PropTypes.any
};
