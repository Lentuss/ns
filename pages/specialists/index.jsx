import { useRouter } from 'next/router';

import { widthLayout } from '@/layout/Layout';
import { FeedBack, SpecialistsHead, SpecialistSection } from '@/components';

import { specialistPageSections } from '@/utils/templateData';

import s from '@/styles/pages/Specialists.module.scss';

function Specialists() {
  const { asPath } = useRouter();

  const renderSpecialistSections = () => {
    return specialistPageSections.map(({ title, accent, href }) => (
      <SpecialistSection
        className={s.specialistSection}
        title={title}
        accent={accent}
        href={href ? `${asPath}/${href}` : ''}
        key={title}
      />
    ));
  };

  return (
    <>
      <SpecialistsHead />

      {renderSpecialistSections()}

      <FeedBack page="specialists" />
    </>
  );
}

export default widthLayout(Specialists);
