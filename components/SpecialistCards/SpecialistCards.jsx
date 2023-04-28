import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ButtonPrimary, PatternsAnimationWrap } from '../common';
import { SpecialistTitle } from './SpecialistTitle/SpecialistTitle';
import { SpecialistFeatures } from './SpecialistFeatures/SpecialistFeatures';

import {
  selectSpecialist,
  toogleShowSpecialistFormModal,
  toogleShowSpecialistModal
} from '@/store/slices/specialist';
import { disableHTMLScrolling } from '@/utils/utils';

import { specialistCards } from '@/utils/templateData';

import ProgressIcon1 from '@/assets/images/svg/patterns/specialists/progress-1.svg';
import ProgressIcon2 from '@/assets/images/svg/patterns/specialists/progress-2.svg';
import ProgressIcon3 from '@/assets/images/svg/patterns/specialists/progress-3.svg';
import ProgressIcon4 from '@/assets/images/svg/patterns/specialists/progress-4.svg';

import s from './SpecialistCards.module.scss';
import { useRouter } from 'next/router';
import { SPECIALISTS_PAGE_ROUTE } from '@/utils/const';

export const SpecialistCards = (props) => {
  const { asPath } = useRouter();
  const { className } = props;
  const [isShowPatterns, setShowPatterns] = useState(null);
  const selectedSpecialist = useSelector(
    (state) => state.specialist.selectedSpecialist
  );

  const dispatch = useDispatch();

  const isSpecialistPage = asPath.includes(SPECIALISTS_PAGE_ROUTE);

  const onSelectSpecialistHandler = (data) => {
    dispatch(selectSpecialist(data));
    dispatch(toogleShowSpecialistModal(true));
    disableHTMLScrolling();
  };

  const onGoToSpecialistFormModal = (e, data) => {
    e.stopPropagation();
    dispatch(selectSpecialist(data));
    dispatch(toogleShowSpecialistFormModal(true));
    disableHTMLScrolling();
  };

  return (
    <ul className={className}>
      {specialistCards.map((specialist) => {
        const { id, experiense, features, imageSrc, jobName, sallary } =
          specialist;
        return (
          <li
            className={cx(s.specialistItem, {
              [s.isActive]: selectedSpecialist?.id === id
            })}
            onClick={() => onSelectSpecialistHandler(specialist)}
            onMouseEnter={() => setShowPatterns(id)}
            onMouseLeave={() => setShowPatterns(null)}
            key={id}
          >
            <SpecialistTitle
              className={s.specialistItemTitle}
              experience={experiense}
              image={imageSrc}
              jobName={jobName}
              sallary={!isSpecialistPage && sallary}
            />
            <SpecialistFeatures
              className={s.specialistItemFeatures}
              skills={features}
            />

            <div className={s.specialistItemButtons}>
              <ButtonPrimary appearance="grey">Більше</ButtonPrimary>
              <ButtonPrimary
                onClick={(e) => onGoToSpecialistFormModal(e, specialist)}
              >
                Обрати
              </ButtonPrimary>
            </div>

            <PatternsAnimationWrap isShow={isShowPatterns === id}>
              <ProgressIcon1 className={s.specialistItemPattern} />
              <ProgressIcon2 className={s.specialistItemPattern} />
              <ProgressIcon3 className={s.specialistItemPattern} />
              <ProgressIcon4 className={s.specialistItemPattern} />
            </PatternsAnimationWrap>
          </li>
        );
      })}
    </ul>
  );
};

SpecialistCards.propTypes = {
  className: PropTypes.string
};
