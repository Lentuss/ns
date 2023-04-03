import { memo } from 'react';
import { Collapse } from 'react-collapse';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { Htag, Ptag } from '..';

import ChevronIcon from '@/assets/icons/chevron-down.svg';

import s from './CustomCollapse.module.scss';

export const CustomCollapse = memo((props) => {
  const { children, title, number, isOpened, onClick, className } = props;

  return (
    <div
      className={cx(s.collapse, className, {
        [s.isOpened]: isOpened
      })}
    >
      <button className={s.collapseButton} type="button" onClick={onClick}>
        <Ptag className={s.collapseButtonNumber} size="m">
          {number}
        </Ptag>

        <Htag className={s.collapseButtonTitle} tag="h4">
          {title}
        </Htag>

        <ChevronIcon className={s.collapseButtonIcon} />
      </button>

      <Collapse
        isOpened={isOpened}
        theme={{
          collapse: s.collapseContainer,
          content: s.collapseContent
        }}
      >
        {children}
      </Collapse>
    </div>
  );
});

CustomCollapse.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  isOpened: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};
