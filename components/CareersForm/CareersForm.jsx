import PropTypes from 'prop-types';
import cx from 'classnames';

import { ButtonPrimary, Htag, Input, Ptag, Subtitle, Wrapper } from '../common';
import { black800 } from '@/utils/const';

import PatternFormIcon from '@/assets/images/svg/patterns/careers-form-pattern.svg';

import s from './CareersForm.module.scss';

export const CareersForm = ({ className }) => {
  return (
    <div className={cx(s.careersFormWrapper, className)}>
      <PatternFormIcon className={s.careersFormPatternIcon} />
      <Wrapper>
        <div className={s.careersFormSectionInner}>
          <div className={s.careersFormContainer}>
            <Subtitle size="large">Зворотній зв’язок</Subtitle>

            <Htag className={s.careersFormTitle} tag="h2">
              Не знайшли підходящу вакансію?
            </Htag>

            <Ptag color={black800}>
              Залиште свої контакти, щоб ми могли з вами зв’язатися
            </Ptag>
          </div>

          <form className={s.careersForm}>
            <Input className={s.careersFormInput} placeholder="Ім’я" />
            <Input
              className={s.careersFormInput}
              placeholder="E-mail"
              type="email"
            />
            <Input
              className={s.careersFormInput}
              placeholder="Розкажіть про себе"
            />

            <ButtonPrimary className={s.careersFormSubmit}>
              Підтвердити
            </ButtonPrimary>
          </form>
        </div>
      </Wrapper>
    </div>
  );
};

CareersForm.propTypes = {
  className: PropTypes.string
};
