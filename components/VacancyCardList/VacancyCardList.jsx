import { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  ButtonPrimary,
  Heading,
  Htag,
  Label,
  PatternsAnimationWrap,
  Ptag,
  Wrapper
} from '../common';
import { ArticleReadInfo } from '..';

import { vacancyCardListData } from '@/utils/templateData';
import { CAREERS_PAGE_ROUTE, black800 } from '@/utils/const';

import ProgressIcon1 from '@/assets/images/svg/patterns/specialists/progress-1.svg';
import ProgressIcon2 from '@/assets/images/svg/patterns/specialists/progress-2.svg';
import ProgressIcon3 from '@/assets/images/svg/patterns/specialists/progress-3.svg';
import ProgressIcon4 from '@/assets/images/svg/patterns/specialists/progress-4.svg';

import s from './VacancyCardList.module.scss';
import Link from 'next/link';

export const VacancyCardList = ({ className }) => {
  const [isShowPatterns, setShowPatterns] = useState(null);

  return (
    <div className={className}>
      <Wrapper>
        <Htag className={s.vacancyTitle} tag="h2">
          Ми наймаємо
        </Htag>
        <ul>
          {vacancyCardListData.map(
            ({ description, experiense, id, infoTags, title }) => (
              <li
                key={id}
                onMouseEnter={() => setShowPatterns(id)}
                onMouseLeave={() => setShowPatterns(null)}
              >
                <Link
                  className={s.vacancyCard}
                  href={`${CAREERS_PAGE_ROUTE}/${id}`}
                >
                  <div className={s.vacancyCardDescription}>
                    <Heading className={s.vacancyCardTitle}>{title}</Heading>
                    <div className={s.vacancyCardInfo}>
                      <Label name={experiense} />
                      <ArticleReadInfo info={infoTags} />
                    </div>
                    <Ptag size="m" color={black800}>
                      {description}
                    </Ptag>
                  </div>
                  <ButtonPrimary
                    className={s.vacancyCardButton}
                    appearance="grey"
                  >
                    Детальніше
                  </ButtonPrimary>

                  <PatternsAnimationWrap isShow={isShowPatterns === id}>
                    <ProgressIcon1 className={s.vacancyPattern} />
                    <ProgressIcon2 className={s.vacancyPattern} />
                    <ProgressIcon3 className={s.vacancyPattern} />
                    <ProgressIcon4 className={s.vacancyPattern} />
                  </PatternsAnimationWrap>
                </Link>
              </li>
            )
          )}
        </ul>
      </Wrapper>
    </div>
  );
};

VacancyCardList.propTypes = {
  className: PropTypes.string
};
