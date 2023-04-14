import { useRouter } from 'next/router';

import { widthLayout } from '@/layout/Layout';
import { FeedBack, SpecialistsHead, SpecialistSection } from '@/components';
import { SpecialistsFormModal, SpecialistsModal } from '@/components/modals';

import { specialistPageSections } from '@/utils/templateData';
import { pageTypes } from '@/utils/const';

import s from '@/styles/pages/Specialists.module.scss';

function Specialists() {
  const { asPath } = useRouter();

  const renderSpecialistSections = () => {
    return specialistPageSections.map(({ title, accent, href }) => (
      <SpecialistSection
        className={s.specialistSection}
        title={title}
        accent={accent}
        href={href ? `${asPath}${href}` : ''}
        key={title}
      />
    ));
  };

  return (
    <>
      <SpecialistsHead className={s.specialistsHead} />

      {renderSpecialistSections()}

      <FeedBack page="specialists" />

      <SpecialistsModal />
      <SpecialistsFormModal />
    </>
  );
}

export default widthLayout(Specialists, pageTypes.specialists);
