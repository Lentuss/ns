import { Children, cloneElement } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import s from './PatternsAnimationWrap.module.scss';

const TRANSITION_DELAY = 30;

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
              ? `${(idx + 1) * TRANSITION_DELAY}ms`
              : `${(arrayChildren.length - idx + 1) * TRANSITION_DELAY}ms`
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
