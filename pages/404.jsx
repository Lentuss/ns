import { widthLayout } from '@/layout/Layout';
import { ButtonPrimary, Htag, Ptag, Wrapper } from '@/components/common';

import { CONTACTS_PAGE_ROUTE, MAIN_PAGE_ROUTE, black800 } from '@/utils/const';

import NotFoundPatternIcon from '@/assets/images/svg/patterns/404-pattern.svg';

import s from '@/styles/pages/NotFound.module.scss';

function NotFound() {
  return (
    <section className={s.notFound}>
      <Wrapper>
        <div className={s.notFoundInner}>
          <NotFoundPatternIcon className={s.notFoundIcon} />

          <Htag className={s.notFoundTitle} tag="h3">
            Сторінка не знайдена
          </Htag>

          <Ptag size="m" color={black800}>
            Здається, ми не можемо знайти сторінку, яку ви шукаєте.
          </Ptag>

          <div className={s.notFoundButtons}>
            <ButtonPrimary href={MAIN_PAGE_ROUTE}>На головну</ButtonPrimary>
            <ButtonPrimary href={CONTACTS_PAGE_ROUTE} appearance="grey">
              До контактів
            </ButtonPrimary>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default widthLayout(NotFound);
