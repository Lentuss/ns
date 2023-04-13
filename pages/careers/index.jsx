import cx from 'classnames';

import { widthLayout } from '@/layout/Layout';
import { CareersForm, VacancyCardList } from '@/components';

import { pageTypes } from '@/utils/const';

import s from '@/styles/pages/Careers.module.scss';

function Careers() {
  return (
    <div className={s.careers}>
      <VacancyCardList className={s.careersVacancies} />
      <CareersForm className={s.careersForm} />
    </div>
  );
}

export default widthLayout(Careers, pageTypes.careers);
