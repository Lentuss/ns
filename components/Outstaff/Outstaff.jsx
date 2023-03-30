import cx from 'classnames';

import { ButtonPrimary, Htag, Ptag, Wrapper } from '../common';

import { benefitsData } from '@/utils/templateData';

import OutstaffPatternIcon from '@/assets/images/svg/patterns/outstaff-pattern.svg';

import s from './Outstaff.module.scss';

export const Outstaff = ({ className }) => {
  const renderBenefits = () => (
    <ul className={s.benefits}>
      {benefitsData.map(({ value, text }) => (
        <li className={s.benefitsItem} key={value}>
          <span className={s.benefitsItemValue}>{value}</span>
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

          <ButtonPrimary className={s.outstaffButton} appearance="white">
            Отримати спеціаліста
          </ButtonPrimary>

          {renderBenefits()}

          <OutstaffPatternIcon className={s.outstaffBgIcon} />
        </div>
      </Wrapper>
    </div>
  );
};
