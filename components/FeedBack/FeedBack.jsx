import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  Wrapper,
  Htag,
  Ptag,
  Subtitle,
  Input,
  Select,
  ButtonPrimary
} from '@/components/common';

import { pageTypes } from '@/utils/const';

import FeedBackPatternIcon from '@/assets/images/svg/patterns/feedback-pattern.svg';
import FeedBackMobilePatternIcon from '@/assets/images/svg/patterns/feedback-mobile-pattern.svg';
import FeedBackSpecialistsPatternIcon from '@/assets/images/svg/patterns/feedback-specialists-pattern.svg';
import FeedBackSpecialistsMobilePatternIcon from '@/assets/images/svg/patterns/feedback-specialists-mobile-pattern.svg';
import FeedBackAboutPatternIcon from '@/assets/images/svg/patterns/feedback-about-pattern.svg';
import FeedBackAboutMobilePatternIcon from '@/assets/images/svg/patterns/feedback-about-mobile-pattern.svg';
import FeedBackWorksPatternIcon from '@/assets/images/svg/patterns/feedback-works-pattern.svg';
import FeedBackWorksMobilePatternIcon from '@/assets/images/svg/patterns/feedback-works-mobile-pattern.svg';

import s from './FeedBack.module.scss';

export const FeedBack = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputText, setInputText] = useState('');
  const { className, page } = props;

  const options = [
    { value: 'Unit', label: 'Unit' },
    { value: 'Unit', label: 'Unit' },
    { value: 'Unit', label: 'Unit' }
  ];

  const renderPattetnIcons = () => {
    const patternClassesDesk = cx(
      s.feedbackPatternIcon,
      s.feedbackPatternIconDesktop
    );
    const patternClassesMobile = cx(
      s.feedbackPatternIcon,
      s.feedbackPatternIconMobile
    );

    return (
      <>
        {page === pageTypes.home && (
          <FeedBackPatternIcon className={patternClassesDesk} />
        )}
        {page === pageTypes.home && (
          <FeedBackMobilePatternIcon className={patternClassesMobile} />
        )}
        {page === pageTypes.specialists && (
          <FeedBackSpecialistsPatternIcon className={patternClassesDesk} />
        )}
        {page === pageTypes.specialists && (
          <FeedBackSpecialistsMobilePatternIcon
            className={patternClassesMobile}
          />
        )}
        {page === pageTypes.about && (
          <FeedBackAboutPatternIcon className={patternClassesDesk} />
        )}
        {page === pageTypes.about && (
          <FeedBackAboutMobilePatternIcon className={patternClassesMobile} />
        )}
        {page === pageTypes.howItWorks && (
          <FeedBackWorksPatternIcon className={patternClassesDesk} />
        )}
        {page === pageTypes.howItWorks && (
          <FeedBackWorksMobilePatternIcon className={patternClassesMobile} />
        )}
      </>
    );
  };

  return (
    <div className={cx(s.feedback, s[`feedback-${page}`], className)}>
      <Wrapper>
        <div className={s.feedbackInner}>
          <Subtitle>Зворотній зв’язок</Subtitle>
          <Htag tag="h2" className={s.feedbackHeading}>
            Оберіть бажаного спеціаліста
          </Htag>
          <form className={s.form}>
            <div className={s.formInner}>
              <div className={s.formWrapper}>
                <div className={s.formInputWrapper}>
                  <Ptag className={s.formSubtitle}>Ваші дані</Ptag>
                  <Input
                    placeholder="Iм'я"
                    value={inputName}
                    onChange={(e) => {
                      setInputName(e.currentTarget.value);
                    }}
                  />
                  <Input
                    placeholder="E-mail"
                    value={inputEmail}
                    onChange={(e) => {
                      setInputEmail(e.currentTarget.value);
                    }}
                  />
                </div>
                <div className={s.formInputWrapper}>
                  <Ptag className={s.formSubtitle}>Оберіть спеціаліста</Ptag>
                  <Select options={options} placeholder="Оберіть сферу" />
                  <Select options={options} placeholder="Оберіть спеціаліста" />
                </div>
              </div>
              <Input
                type="textarea"
                placeholder="Коментар"
                value={inputText}
                onChange={(e) => {
                  setInputText(e.currentTarget.value);
                }}
              />
            </div>
            <div className={s.formSubmitionWrapper}>
              <Ptag className={s.formText} size="m">
                Ми зв’яжемось з вами протягом декількох хвилин, щоб надіслати
                договір на ознайомлення
              </Ptag>
              <ButtonPrimary
                appearance="pink"
                type="submit"
                className={s.formBtn}
              >
                Підтвердити
              </ButtonPrimary>
            </div>
          </form>
        </div>
      </Wrapper>
      {renderPattetnIcons()}
    </div>
  );
};

FeedBack.propTypes = {
  className: PropTypes.string,
  page: PropTypes.oneOf(['home', 'specialists', 'works', 'about'])
};
