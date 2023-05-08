import { useRouter } from 'next/router';

import {
  AccentH,
  ButtonText,
  Heading,
  Htag,
  Label,
  Ptag,
  Wrapper
} from '@/components/common';
import { widthLayout } from '@/layout/Layout';
import {
  vacancyCardListData,
  vacancyDescriptionData
} from '@/utils/templateData';
import { ArticleReadInfo, ListWithBullets, VacancyForm } from '@/components';

import { CAREERS_PAGE_ROUTE, black800 } from '@/utils/const';

import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';

import s from '@/styles/pages/Vacancy.module.scss';

function Vacancy({ vacancyData }) {
  const { back } = useRouter();
  const { title, experiense, infoTags } = vacancyData || {};

  const renderVacancyTitle = (
    <div className={s.vacancyTitle}>
      <Htag tag="h2">
        {title}
        &nbsp;<AccentH className={s.vacancyTitleSallary}>$2000</AccentH>
      </Htag>
      <div className={s.vacancyTitleTags}>
        <Label name={experiense} />
        <ArticleReadInfo info={infoTags} />
      </div>
    </div>
  );

  const renderVacancyDescription = (
    <ul className={s.vacancyDescription}>
      {vacancyDescriptionData.map(({ title, description, listData }) => (
        <li className={s.vacancyDescriptionItem} key={title}>
          <Heading size="s">{title}</Heading>
          <Ptag size="m" color={black800}>
            {description}
          </Ptag>
          {listData && <ListWithBullets listData={listData} />}
        </li>
      ))}
    </ul>
  );

  return (
    <section className={s.vacancy}>
      <Wrapper>
        <div className={s.vacancyInner}>
          <ButtonText className={s.vacancyButtonBack} onClick={back}>
            <ArrowLeftIcon />
            Назад
          </ButtonText>
          <div className={s.vacancyInfo}>
            {renderVacancyTitle}
            {renderVacancyDescription}
          </div>
          <VacancyForm className={s.vacancyForm} />
        </div>
      </Wrapper>
    </section>
  );
}

export default widthLayout(Vacancy);

export const getStaticPaths = async ({ locales }) => {
  let paths = [];
  // vacancyCardListData.map(({ id }) => `${CAREERS_PAGE_ROUTE}/${id}`)

  vacancyCardListData.forEach(({ id }) => {
    for (const locale of locales) {
      paths.push({
        params: {
          alias: '/' + id
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

  const vacancyData =
    vacancyCardListData.find(({ id }) => id === +params.alias) || {};

  return {
    props: {
      vacancyData
    }
  };
};
