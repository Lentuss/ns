import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ArticleReadInfo } from '..';
import {
  ButtonOutline,
  ButtonPrimary,
  ButtonText,
  Ptag,
  Text
} from '../common';

import { articleNewsMini, socialsData } from '@/utils/templateData';

import s from './ArticleSidebar.module.scss';

export const ArticleSidebar = ({ className }) => {
  const renderSocials = (
    <>
      <Text className={s.sidebarTitle}>Поділитися у мережах</Text>
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
    </>
  );

  const renderLatestNews = (
    <>
      <Text className={s.sidebarTitle}>
        Більше на тему <mark>Аутстафінг</mark>
      </Text>
      <ul className={s.sidebarLatestNewsList}>
        {articleNewsMini.map(({ id, title, publishDate, timeRead }) => (
          <li className={s.sidebarLatestNewsItem} key={id}>
            <ArticleReadInfo
              className={s.sidebarLatestNewsInfo}
              info={[publishDate, timeRead]}
            />
            <Ptag size="m">{title}</Ptag>
          </li>
        ))}
      </ul>

      <ButtonOutline className={s.latestNewsButtonMobile}>
        Більше новин
      </ButtonOutline>
      <ButtonText className={s.latestNewsButtonDesktop} appearance="pink">
        Більше новин
      </ButtonText>
    </>
  );

  return (
    <aside className={cx(s.sidebar, className)}>
      {renderSocials}
      {renderLatestNews}
    </aside>
  );
};

ArticleSidebar.propTypes = {
  className: PropTypes.string
};
