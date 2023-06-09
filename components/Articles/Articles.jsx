import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { Heading, Label, Ptag } from '../common';
import { ArticleReadInfo } from '..';

import { latestNewsList } from '@/utils/templateData';
import { BLOG_PAGE_ROUTE, black700 } from '@/utils/const';

import s from './Articles.module.scss';

const MAX_DESCRIPTION_SIZE = 250;

export const Articles = ({ className }) => {
  return (
    <ul className={cx(s.articlesList, className)}>
      {latestNewsList.map(
        ({
          author,
          desription,
          href,
          image,
          publicDate,
          tags,
          timeRead,
          title
        }) => (
          <li className={s.articlesItem} key={title}>
            <Link
              className={s.articlesLink}
              href={{
                pathname: `${BLOG_PAGE_ROUTE}/[slug]`,
                query: { slug: href.split('')[1] }
              }}

              // href={BLOG_PAGE_ROUTE + href}
            >
              <div className={s.articlesItemImageWrap}>
                <Image
                  className={s.articlesItemImage}
                  src={image}
                  alt={title}
                />
              </div>

              <ArticleReadInfo
                className={s.articlesItemPublishInfo}
                info={[author, publicDate]}
              />

              <Heading className={s.articlesItemTitle} size="s">
                {title}
              </Heading>

              <Ptag className={s.articlesItemDescription} size="m">
                {desription.slice(0, MAX_DESCRIPTION_SIZE)}...
              </Ptag>

              <div className={s.articlesItemTagsInfo}>
                <Label className={s.articlesItemTag} name={tags[0]} />
                {tags.length > 1 && <Label name={`+${tags.length - 1}`} />}

                <Ptag size="m" color={black700}>
                  {timeRead}
                </Ptag>
              </div>
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

Articles.propTypes = {
  className: PropTypes.string
};
