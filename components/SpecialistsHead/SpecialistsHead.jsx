import { memo } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { ButtonOutline, Chip, Htag, Wrapper } from '../common';

import { specialistsCategoriesList } from '@/utils/templateData';

import PlusIcon from '@/assets/icons/plus.svg';

import s from './SpecialistsHead.module.scss';

export const SpecialistsHead = memo((props) => {
  const { query } = useRouter();

  const renderCategories = () => (
    <ul className={s.specialistsHeadList}>
      {specialistsCategoriesList.map(({ id, count, label, href }) => (
        <li key={id}>
          <Link href={`/specialists/${href}`}>
            <Chip name={label} count={count} isActive={query?.alias === href} />
          </Link>
        </li>
      ))}
      <li>
        <ButtonOutline
          className={s.specialistsHeadListButton}
          appearance="black"
        >
          <PlusIcon />
          Інша
        </ButtonOutline>
      </li>
    </ul>
  );
  return (
    <div className={s.specialistsHead}>
      <Wrapper>
        <Htag className={s.specialistsHeadTitle} tag="h2">
          Оберіть сферу
        </Htag>

        {renderCategories()}
      </Wrapper>
    </div>
  );
});

SpecialistsHead.propTypes = {
  className: PropTypes.string
};
