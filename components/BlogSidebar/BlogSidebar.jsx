import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ButtonPrimary, Text } from '../common';
import { FooterContacts, FooterCopyright, FooterSocials } from '..';

import s from './BlogSidebar.module.scss';
import { blogCategoriesList } from '@/utils/templateData';
import { socialsData } from '@/utils/templateData';

export const BlogSidebar = ({ className }) => {
  const renderCategories = () => (
    <>
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
    </>
  );

  const renderContacts = () => (
    <>
      <Text className={s.sidebarTitle}>Контакти</Text>
      <FooterContacts className={s.sidebarContancts} />
    </>
  );

  const renderSocials = () => (
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
  );

  return (
    <aside className={cx(s.sidebar, className)}>
      {renderCategories()}
      {renderContacts()}
      {renderSocials()}
      <FooterCopyright className={s.sidebarCopyright} />
    </aside>
  );
};

BlogSidebar.propTypes = {
  className: PropTypes.string
};
