import { useState } from 'react';

import { FeedBack, SpecialistSection, SpecialistsHead } from '@/components';
import { ButtonOutline, Pagination, Wrapper } from '@/components/common';
import { SpecialistsModal } from '@/components/modals';
import { widthLayout } from '@/layout/Layout';
import { SpecialistsFormModal } from '@/components/modals';

import { specialistPageSections } from '@/utils/templateData';
import { SPECIALISTS_PAGE_ROUTE, pageTypes } from '@/utils/const';

import s from '@/styles/pages/Specialists.module.scss';

function Specialist({ headData }) {
  const { title, accent } = headData || {};

  const [activePage, setActivePage] = useState(1);

  return (
    <>
      <SpecialistsHead className={s.specialistsHead} />
      <SpecialistSection title={title} accent={accent} />
      <div className={s.specialistPagination}>
        <Wrapper>
          <div className={s.specialistPaginationInner}>
            <ButtonOutline className={s.specialistPaginationButtonMore}>
              Завантажити більше
            </ButtonOutline>

            <Pagination
              className={s.specialistPaginationElement}
              numPages={5}
              activePage={activePage}
              onClick={setActivePage}
            />
          </div>
        </Wrapper>
      </div>
      <FeedBack page="specialists" />

      <SpecialistsModal />
      <SpecialistsFormModal />
    </>
  );
}

export default widthLayout(Specialist, pageTypes.specialists);

export const getStaticPaths = async ({ locales }) => {
  // specialistPageSections
  //     .map(({ href }) => href && `${SPECIALISTS_PAGE_ROUTE}${href}`)

  let paths = [];

  specialistPageSections.forEach(({ href }) => {
    if (!href) return;

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

export const getStaticProps = async ({ params }) => {
  if (!params) {
    return {
      notFound: true
    };
  }

  const headData =
    specialistPageSections.find(({ href }) => href.includes(params.slug)) || {};

  return {
    props: {
      headData
    }
  };
};
