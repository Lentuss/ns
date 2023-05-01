import { memo } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cx from 'classnames';

import { ButtonOutline, Chip, Htag, Wrapper } from '../common';

import { specialistsCategoriesList } from '@/utils/templateData';
import { SPECIALISTS_PAGE_ROUTE } from '@/utils/const';

import PlusIcon from '@/assets/icons/plus.svg';

import s from './SpecialistsHead.module.scss';

export const SpecialistsHead = memo(({ className }) => {
  const { query } = useRouter();

  const renderCategories = (
    <ul className={s.specialistsHeadList}>
      {specialistsCategoriesList.map(
        ({ id, count, label, href, labelText }) => (
          <li key={id}>
            <Link href={`${SPECIALISTS_PAGE_ROUTE}${href}`}>
              <Chip
                name={label}
                count={count}
                isActive={href.includes(query?.alias)}
                label={labelText}
              />
            </Link>
          </li>
        )
      )}
      <li>
        <ButtonOutline
          className={s.specialistsHeadListButton}
          appearance="black"
        >
          <span>
            <PlusIcon />
            Інша
          </span>
        </ButtonOutline>
      </li>
    </ul>
  );
  return (
    <div className={cx(s.specialistsHead, className)}>
      <Wrapper>
        <Htag className={s.specialistsHeadTitle} tag="h2">
          Оберіть сферу
        </Htag>

        {renderCategories}
      </Wrapper>
    </div>
  );
});

SpecialistsHead.propTypes = {
  className: PropTypes.string
};
