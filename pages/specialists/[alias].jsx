import { useState } from 'react';

import { FeedBack, SpecialistSection, SpecialistsHead } from '@/components';
import { ButtonOutline, Pagination, Wrapper } from '@/components/common';
import { SpecialistsModal } from '@/components/modals';
import { widthLayout } from '@/layout/Layout';

import { specialistPageSections } from '@/utils/templateData';

import s from '@/styles/pages/Specialists.module.scss';
import { SpecialistsFormModal } from '@/components/modals';

function Specialist({ headData }) {
  const { title, accent } = headData || {};

  const [activePage, setActivePage] = useState(1);

  return (
    <>
      <SpecialistsHead />
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

export default widthLayout(Specialist);

export const getStaticPaths = async () => {
  return {
    paths: specialistPageSections
      .map(({ href }) => href && `/specialists/${href}`)
      .filter((href) => href),
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
    specialistPageSections.find(({ href }) => href === params.alias) || {};

  return {
    props: {
      headData
    }
  };
};
