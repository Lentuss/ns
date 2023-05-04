import Image from 'next/image';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Link, Element } from 'react-scroll';

import { Heading, Label, Ptag, Rating } from '../common';
import { ArticleReadInfo } from '..';
import { Quote } from '../common/Quote/Quote';

import { black700 } from '@/utils/const';
import { contentArticleData, mainTextArticle } from '@/utils/templateData';

import s from './ArticleItem.module.scss';

export const ArticleItem = ({ className }) => {
  const articleData = useSelector((state) => state.article.articleData);

  if (!articleData) {
    return <p>Empty</p>;
  }

  const {
    title,
    author,
    publicDate,
    tags,
    timeRead,
    image,
    desription,
    rating
  } = articleData || {};

  const renderArticleInfo = (
    <div className={s.articleInfo}>
      <ArticleReadInfo info={[author, publicDate]} />

      <Rating rating={rating} />
    </div>
  );

  const renderArticleHead = (
    <>
      <Heading className={s.articleTitle} size="l">
        {title}
      </Heading>
      <Ptag className={s.articleDescription} size="l">
        {desription}
      </Ptag>
      <div className={s.articleTags}>
        {tags.map((t) => (
          <Label className={s.articleTagsItem} name={t} key={t} />
        ))}
        <Ptag className={s.articleReadTime} size="m" color={black700}>
          {timeRead}
        </Ptag>
      </div>
    </>
  );

  const renderContentArticle = (
    <div className={s.articleContent}>
      <Heading className={s.articleContentHead}>Зміст</Heading>
      <ul>
        {contentArticleData.map((item, idx) => (
          <li className={s.articleContentItem}>
            <Link to={`test${idx}`} spy smooth offset={-10} duration={500}>
              <Ptag size="l">{item}</Ptag>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderMainTextArticle = mainTextArticle.map(({ title, text }, idx) => (
    <Element className={s.articleParagraph} key={title} name={`test${idx}`}>
      <Heading className={s.articleParagraphTitle}>{title}</Heading>
      <Ptag size="l">{text}</Ptag>
    </Element>
  ));

  return (
    <div className={cx(s.article, className)}>
      <Image className={s.articleImage} src={image} alt={title} />

      {renderArticleInfo}
      {renderArticleHead}
      {renderContentArticle}
      {renderMainTextArticle}

      <Quote
        className={s.articleQuote}
        author="Ernest Hemingway"
        qoute="Happiness in intelligent people is the rarest thing I know"
      />
    </div>
  );
};

ArticleItem.propTypes = {
  className: PropTypes.string
};
