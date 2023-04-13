import PropTypes from 'prop-types';
import cx from 'classnames';

import { Ptag } from '../common';
import { black800 } from '@/utils/const';

import s from './ListWithBullets.module.scss';

export const ListWithBullets = ({ className, listData = [] }) => {
  return (
    <ul className={cx(s.listWidthBullets, className)}>
      {listData.map((text) => (
        <li className={s.listWidthBulletsItem} key={text}>
          <Ptag size="m" color={black800}>
            {text}
          </Ptag>
        </li>
      ))}
    </ul>
  );
};

ListWithBullets.propTypes = {
  className: PropTypes.string,
  listData: PropTypes.array
};
