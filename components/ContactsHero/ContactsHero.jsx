import { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  AccentH,
  ButtonPrimary,
  Htag,
  Input,
  Ptag,
  Subtitle,
  Text,
  Wrapper
} from '../common';
import { FooterContacts } from '..';

import { black800 } from '@/utils/const';

import s from './ContactsHero.module.scss';

export const ContactsHero = ({ className }) => {
  const [isAcceptFormView, setAcceptFormView] = useState(false);

  const acceptViewFormHandler = () => {
    setAcceptFormView(true);

    setTimeout(() => setAcceptFormView(false), 2000);
  };

  const renderContactsHeroForm = (
    <form className={s.contactHeroForm}>
      <Text className={s.contactHeroFormTitle} size="l">
        Зворотній зв’язок
      </Text>
      <Ptag className={s.contactHeroFormText} size="m" color={black800}>
        З’яжіться з нами, якщо залишились питання
      </Ptag>
      <Input placeholder="Ім’я" />
      <Input placeholder="E-mail" type="email" />
      <Input placeholder="Коментар" type="textarea" />
      <ButtonPrimary
        className={s.contactHeroFormSubmit}
        onClick={acceptViewFormHandler}
      >
        Підтвердити
      </ButtonPrimary>

      <div
        className={cx(s.contactHeroFormAcceptView, {
          [s.isActive]: isAcceptFormView
        })}
      >
        <Text size="l">Дякуємо!</Text>
        <Ptag size="m" color={black800}>
          Ми зв’яжемось з вами протягом декількох хвилин
        </Ptag>
      </div>
    </form>
  );

  return (
    <section className={cx(s.contactHero, className)}>
      <Wrapper>
        <div className={s.contactHeroInner}>
          <Subtitle className={s.contactsHeroSubtitle} size="thin">
            Контакти
          </Subtitle>
          <Htag className={s.contactsHeroTitle} tag="h2">
            <span>
              <AccentH location="contacts">NewStaff відкритий</AccentH>
            </span>
            <span>до ваших питань</span>
            <span>та пропозицій</span>
          </Htag>
          <FooterContacts className={s.contactHeroContacts} />
          {renderContactsHeroForm}
        </div>
      </Wrapper>
    </section>
  );
};

ContactsHero.propTypes = {
  className: PropTypes.string
};
