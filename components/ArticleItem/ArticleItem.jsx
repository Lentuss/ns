import Image from 'next/image';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useSelector } from 'react-redux';

import { Heading, Label, Ptag, Rating } from '../common';
import { ArticleReadInfo } from '..';
import { Quote } from '../common/Quote/Quote';

import { black700 } from '@/utils/const';
import { mainTextArticle } from '@/utils/templateData';

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
        <li className={s.articleContentItem}>
          <Ptag size="l">
            The Difference between Outsourcing and Outstaffing
          </Ptag>
        </li>
        <li className={s.articleContentItem}>
          <Ptag size="l">
            Outsourcing vs. Outstaffing: Looking for the Best Fit
          </Ptag>
        </li>
        <li className={s.articleContentItem}>
          <Ptag size="l">How does Outsourcing work?</Ptag>
        </li>
        <li className={s.articleContentItem}>
          <Ptag size="l">How does Outstaffing Work?</Ptag>
        </li>
        <li className={s.articleContentItem}>
          <Ptag size="l">
            Make Outsourcing and Outstaffing Great (Always): Useful Cues
          </Ptag>
        </li>
        <li className={s.articleContentItem}>
          <Ptag size="l">Conclusion</Ptag>
        </li>
      </ul>
    </div>
  );

  const renderMainTextArticle = mainTextArticle.map(({ title, text }) => (
    <div className={s.articleParagraph} key={title}>
      <Heading className={s.articleParagraphTitle}>{title}</Heading>
      <Ptag size="l">{text}</Ptag>
    </div>
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
