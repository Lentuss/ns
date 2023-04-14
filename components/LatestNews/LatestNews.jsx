import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';

import { ButtonOutline, Htag, Label, Ptag, Subtitle, Wrapper } from '../common';

import { black700 } from '@/utils/const';
import { latestNewsList } from '@/utils/templateData';

import s from './LatestNews.module.scss';

const Article = ({
  title,
  author,
  publicDate,
  tags,
  timeRead,
  href,
  image
}) => (
  <Link className={s.article} href={href}>
    <div className={s.articleWrapImage}>
      <Image className={s.articleImage} src={image} alt={title} />
    </div>
    <Subtitle className={s.articleTopInfo} size="small">
      <span>{author}</span>|<span>{publicDate}</span>
    </Subtitle>
    <Htag className={s.articleTitle} tag="h4">
      {title}
    </Htag>

    <div className={s.articleBottomInfo}>
      <Label className={s.articleBottomTag} name={tags[0]} />
      {tags.length > 1 && <Label name={`+${tags.length - 1}`} />}
      <Ptag size="m" color={black700}>
        {timeRead}
      </Ptag>
    </div>
  </Link>
);

export const LatestNews = ({ className }) => {
  const renderHead = () => (
    <>
      <Htag className={s.latestNewsTitle} tag="h2">
        Останні новини
      </Htag>
      <ButtonOutline className={s.latestNewsButton} appearance="black">
        Читати всі новини
      </ButtonOutline>
    </>
  );

  const renderLatestNewsList = () => (
    <ul className={s.latestNewsList}>
      {latestNewsList.map((newsData) => (
        <li className={s.latestNewsListItem} key={newsData.title}>
          <Article {...newsData} />
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cx(s.latestNews, className)}>
      <Wrapper>
        <div className={s.latestNewsInner}>
          {renderHead()}
          {renderLatestNewsList()}
        </div>
      </Wrapper>
    </div>
  );
};

LatestNews.propTypes = {};
