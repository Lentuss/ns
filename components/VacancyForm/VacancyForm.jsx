import { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ButtonPrimary, Input, InputFile, Ptag, Text } from '../common';

import { black700 } from '@/utils/const';

import s from './VacancyForm.module.scss';

export const VacancyForm = ({ className }) => {
  const [uploadedFile, setUploadedFile] = useState({});

  return (
    <form className={cx(s.vacancyForm, className)}>
      <Text className={s.vacancyFormTitle} size="l">
        Зворотній зв’язок
      </Text>

      <Input className={s.vacancyFormInput} placeholder="Ім’я" />
      <Input className={s.vacancyFormInput} placeholder="E-mail" type="email" />
      <Input
        className={s.vacancyFormInput}
        placeholder="Розкажіть про себе"
        type="textarea"
      />
      <Input className={s.vacancyFormInput} placeholder="Посилання на резюме" />

      <Ptag className={s.vacancyFormText} color={black700}>
        або
      </Ptag>

      <InputFile
        placeholder="Завантажити резюме"
        fileHandler={setUploadedFile}
        uploadedFileName={uploadedFile?.name}
      />

      <ButtonPrimary className={s.vacancyFormSubmitButton}>
        Підтвердити
      </ButtonPrimary>
    </form>
  );
};

VacancyForm.propTypes = {
  className: PropTypes.string
};
