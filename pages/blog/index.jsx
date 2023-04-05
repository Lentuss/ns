import { Articles, BlogSidebar } from '@/components';
import { ButtonOutline, Htag, Pagination, Wrapper } from '@/components/common';
import { Header } from '@/layout/Header/Header';

import s from '@/styles/pages/Blog.module.scss';

function Blog() {
  return (
    <>
      <Header />

      <div className={s.blog}>
        <Wrapper>
          <div className={s.blogInner}>
            <Htag className={s.blogTitle} tag="h2">
              Блог
            </Htag>

            <Articles className={s.blogArticles} />
            <div className={s.blogLine} />
            <BlogSidebar className={s.blogSidebar} />

            <div className={s.blogPagination}>
              <ButtonOutline className={s.blogPaginationButton}>
                Завантажити більше
              </ButtonOutline>

              <Pagination activePage={1} numPages={5} />
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}

export default Blog;
