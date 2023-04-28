import CountUp from 'react-countup';
import { useDispatch } from 'react-redux';
import cx from 'classnames';

import { ButtonPrimary, Htag, Ptag, Wrapper } from '../common';

import { toogleShowHomeFormModal } from '@/store/slices/specialist';
import { benefitsData } from '@/utils/templateData';
import { disableHTMLScrolling } from '@/utils/utils';

import OutstaffPatternIcon from '@/assets/images/svg/patterns/outstaff-pattern.svg';

import s from './Outstaff.module.scss';

export const Outstaff = ({ className }) => {
  const dispatch = useDispatch();

  const onOpenHomeFormModal = () => {
    dispatch(toogleShowHomeFormModal(true));
    disableHTMLScrolling();
  };

  const renderBenefits = () => (
    <ul className={s.benefits}>
      {benefitsData.map(({ value, text }, idx) => (
        <li className={s.benefitsItem} key={value}>
          <span className={s.benefitsItemValue}>
            {idx === 1 && (
              <span style={{ marginRight: 10 }}>{value.match(/\D/)}</span>
            )}
            <CountUp
              end={parseInt(value.match(/\d+/))}
              scrollSpyOnce
              scrollSpyDelay={100}
              enableScrollSpy
            />
            {idx === 0 && value.match(/\D/)}
          </span>
          <Ptag className={s.benefitsItemText} size="m">
            {text}
          </Ptag>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cx(s.outstaff, className)}>
      <Wrapper>
        <div className={s.outstaffInner}>
          <Htag className={s.outstaffTitle} tag="h3">
            Аутстафінг економить ваш час і гроші
          </Htag>

          <ButtonPrimary
            className={s.outstaffButton}
            appearance="white"
            onClick={onOpenHomeFormModal}
          >
            Отримати спеціаліста
          </ButtonPrimary>

          {renderBenefits()}

          <OutstaffPatternIcon className={s.outstaffBgIcon} />
        </div>
      </Wrapper>
    </div>
  );
};
