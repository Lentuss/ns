import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ButtonPrimary, Text } from '../common';
import { FooterContacts, FooterCopyright } from '..';

import s from './BlogSidebar.module.scss';
import { blogCategoriesList } from '@/utils/templateData';
import { socialsData } from '@/utils/templateData';

export const BlogSidebar = ({ className }) => {
  return (
    <aside className={cx(s.sidebar, className)}>
      <Text className={s.sidebarTitle}>Категорії</Text>
      <ul className={s.sidebarCategoriesList}>
        {blogCategoriesList.map((category, idx) => (
          <li className={s.sidebarCategoriesItem} key={category}>
            <ButtonPrimary appearance="grey" isActive={idx === 0}>
              {category}
            </ButtonPrimary>
          </li>
        ))}
      </ul>

      <Text className={s.sidebarTitle}>Контакти</Text>
      <FooterContacts className={s.sidebarContancts} />

      <ul className={s.sidebarSocials}>
        {socialsData.map(({ label, href }) => (
          <li key={label}>
            <ButtonPrimary
              className={s.sidebarSocialsButton}
              appearance="grey"
              href={href}
            >
              {label}
            </ButtonPrimary>
          </li>
        ))}
      </ul>

      <FooterCopyright className={s.sidebarCopyright} />
    </aside>
  );
};

BlogSidebar.propTypes = {
  className: PropTypes.string
};
