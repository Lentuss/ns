import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import StarIcon from '@/assets/icons/star.svg';

import s from './Rating.module.scss';

const RATING_ARR = [1, 2, 3, 4, 5];

export const Rating = memo(
  ({
    className,
    rating = 0,
    setRating,
    isEditable = false,
    ...ratingProps
  }) => {
    const [currentRating, setCurrentRating] = useState(rating);

    const setRatingClickHandler = (rate) => {
      if (!isEditable || !setRating) return;

      setRating(rate);
    };

    const setRatingMouseHandler = (rate) => {
      if (!isEditable) return;

      setCurrentRating(rate);
    };

    const setRatingKeyDownHandler = (keyCode, rate) => {
      if (!isEditable || keyCode !== 'Space' || !setRating) return;

      setRating(rate);
      setCurrentRating(rate);
    };

    return (
      <ul className={cx(s.rating, className)} {...ratingProps}>
        {RATING_ARR.map((rate) => (
          <li
            className={cx(s.ratingItem, {
              [s.isEditable]: isEditable
            })}
            key={rate}
            onClick={() => setRatingClickHandler(rate)}
            onMouseEnter={() => setRatingMouseHandler(rate)}
            onMouseLeave={() => setRatingMouseHandler(rating)}
            onKeyDown={(e) => setRatingKeyDownHandler(e.code, rate)}
            tabIndex={isEditable ? 0 : -1}
          >
            <StarIcon
              className={cx(s.ratingItemIcon, {
                [s.isActive]: rate <= currentRating
              })}
            />
          </li>
        ))}
      </ul>
    );
  }
);

Rating.propTypes = {
  className: PropTypes.string,
  rating: PropTypes.number,
  setRating: PropTypes.func,
  isEditable: PropTypes.bool
};
