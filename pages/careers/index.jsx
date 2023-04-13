import { widthLayout } from '@/layout/Layout';
import { CareersForm, VacancyCardList } from '@/components';

import { pageTypes } from '@/utils/const';

import s from '@/styles/pages/Careers.module.scss';

function Careers() {
  return (
    <>
      <VacancyCardList className={s.careersVacancies} />
      <CareersForm className={s.careersForm} />
    </>
  );
}

export default widthLayout(Careers, pageTypes.careers);
