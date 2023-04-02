import { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

import { ButtonOutline, Chip, Htag, Wrapper } from '../common';

import { specialistsCategoriesList } from '@/utils/templateData';

import PlusIcon from '@/assets/icons/plus.svg';

import s from './SpecialistsHead.module.scss';

export const SpecialistsHead = (props) => {
  const [activeCategory, setActiveCategory] = useState(1);

  const renderCategories = () => (
    <ul className={s.specialistsHeadList}>
      {specialistsCategoriesList.map(({ id, count, label }) => (
        <li key={id} onClick={() => setActiveCategory(id)}>
          <Chip name={label} count={count} isActive={activeCategory === id} />
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
};

SpecialistsHead.propTypes = {};
