import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import ChevronIcon from '@/assets/icons/chevron-down.svg';

import s from './Pagination.module.scss';

const PaginationButton = ({ className, isActive, onClick }) => (
  <button
    className={cx(s.paginationButton, className, {
      [s.isActive]: isActive
    })}
    onClick={onClick}
  >
    <ChevronIcon className={s.paginationButtonIcon} />
  </button>
);

export const Pagination = ({ numPages, className, activePage, onClick }) => {
  const isFirstPage = activePage > 1;
  const isLastPage = activePage < numPages;

  const renderPaginationList = () => (
    <ul className={s.paginationList}>
      {new Array(numPages).fill(0).map((_, idx) => {
        const currentPage = idx + 1;

        return (
          <li
            className={cx(s.paginationListItem, {
              [s.isActive]: currentPage === activePage
            })}
            onClick={() => onClickHandler(currentPage)}
            key={idx}
          >
            {currentPage}
          </li>
        );
      })}
    </ul>
  );

  const onClickHandler = (nextPage) => {
    if (nextPage > numPages || nextPage < 1) return;

    onClick(nextPage);
  };

  return (
    <div className={cx(s.pagination, className)}>
      <PaginationButton
        className={s.paginationButtonPrev}
        isActive={isFirstPage}
        onClick={() => onClickHandler(activePage - 1)}
      />
      {renderPaginationList()}
      <PaginationButton
        className={s.paginationButtonNext}
        isActive={isLastPage}
        onClick={() => onClickHandler(activePage + 1)}
      />
    </div>
  );
};

Pagination.propTypes = {
  numPages: PropTypes.number.isRequired,
  className: PropTypes.string,
  activePage: PropTypes.number.isRequired,
  onClick: PropTypes.func
};
