import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Wrapper } from '@/components/common';
import { Footer } from '@/layout/Footer/Footer';
import { Header } from '@/layout/Header/Header';
import {
  ArticleItem,
  ArticleSidebar,
  CommentForm,
  CommentsList
} from '@/components';

import { setArticleData } from '@/store/slices/article';
import { latestNewsList } from '@/utils/templateData';

import s from '@/styles/pages/Article.module.scss';

function Article({ articleData }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setArticleData(articleData));
  }, [articleData]);

  return (
    <>
      <Header />

      <div className={s.article}>
        <Wrapper>
          <div className={s.articleInner}>
            <ArticleItem className={s.articleItem} />
            <CommentForm className={s.articleCommentForm} />
            <CommentsList className={s.articleCommentsList} />
            <div className={s.articleLine} />
            <ArticleSidebar className={s.articleSidebar} />
          </div>
        </Wrapper>
      </div>

      <Footer />
    </>
  );
}

export default Article;

export const getStaticPaths = ({ locales }) => {
  let paths = [];

  latestNewsList.forEach(({ href }) => {
    for (const locale of locales) {
      paths.push({
        params: {
          slug: href
        },
        locale
      });
    }
  });

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps = ({ params }) => {
  if (!params) {
    return {
      notFound: true
    };
  }

  const articleData =
    latestNewsList.find(({ href }) => href.includes(params.slug)) || {};

  console.log('params', articleData);
  return {
    props: {
      articleData
    }
  };
};
