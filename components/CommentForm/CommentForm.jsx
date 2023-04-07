import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ButtonPrimary, Input, Ptag, Rating, Text } from '../common';

import { black700 } from '@/utils/const';

import s from './CommentForm.module.scss';

export const CommentForm = ({ className }) => {
  return (
    <form className={cx(s.commentForm, className)}>
      <Text className={s.commentFormTitle} size="l">
        Коментарі
      </Text>

      <Input className={s.commentFormInputName} placeholder="Ім’я" />
      <Input className={s.commentFormInputEmail} placeholder="E-mail" />
      <Input
        className={s.commentFormInputComment}
        placeholder="Коментар"
        type="textarea"
      />

      <div className={s.commentFormBottom}>
        <Ptag size="m" color={black700}>
          Оцінка:
        </Ptag>
        <Rating isEditable />

        <ButtonPrimary className={s.commentFormSubmit}>Надіслати</ButtonPrimary>
      </div>
    </form>
  );
};

CommentForm.propTypes = {
  className: PropTypes.string
};
