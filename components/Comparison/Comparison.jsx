import { useDispatch } from 'react-redux';
import cx from 'classnames';

import { BREAKPOINTS } from '@/utils/const';
import { useWindowDimensions } from '@/hooks';
import { toogleShowHomeFormModal } from '@/store/slices/specialist';
import { disableHTMLScrolling } from '@/utils/utils';

import { features } from '@/utils/templateData';

import { Wrapper, Htag, ButtonPrimary } from '@/components/common';
import { Features } from '@/components';

import s from './Comparison.module.scss';

export const Comparison = ({ className }) => {
  const dispatch = useDispatch();

  const { width } = useWindowDimensions();

  const onOpenHomeFormModal = () => {
    dispatch(toogleShowHomeFormModal(true));
    disableHTMLScrolling();
  };

  return (
    <div className={cx(s.comparison, className)}>
      <Wrapper>
        <div className={s.comparisonInner}>
          <div className={s.comparisonStandart}>
            <Htag className={s.comparisonHeading} tag="h3">
              Стандартний підхід
            </Htag>
            <Features data={features.standart} />
          </div>
          <div className={cx(s.comparisonStandart, s.comparisonOutstaff)}>
            <div className={s.comparisonHeadingWrapper}>
              <Htag className={s.comparisonHeading} tag="h3">
                Аутстафінг
              </Htag>
              {width >= BREAKPOINTS.tablet && (
                <ButtonPrimary appearance="grey" onClick={onOpenHomeFormModal}>
                  Спробувати
                </ButtonPrimary>
              )}
            </div>
            <Features
              className={s.comparisonFeatures}
              line="light"
              data={features.outstaff}
            />
            {width <= BREAKPOINTS.tablet && (
              <ButtonPrimary
                appearance="grey"
                className={s.comparisonBtn}
                onClick={onOpenHomeFormModal}
              >
                Спробувати
              </ButtonPrimary>
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
