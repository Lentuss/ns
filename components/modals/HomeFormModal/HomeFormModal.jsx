import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Heading, Modal, Text, Input, Ptag, Select } from '@/components/common';

import {
  toogleShowHomeFormModal,
  toogleShowSuccessModal
} from '@/store/slices/specialist';

import { enableHTMLScrolling } from '@/utils/utils';
import { black800 } from '@/utils/const';

import s from './HomeFormModal.module.scss';

export const HomeFormModal = (props) => {
  const dispatch = useDispatch();

  const isHomeFormModalShow = useSelector(
    (state) => state.specialist.isHomeFormModalShow
  );

  const onCloseHandler = () => {
    dispatch(toogleShowHomeFormModal(false));
    enableHTMLScrolling();
  };

  const onAcceptHandler = () => {
    dispatch(toogleShowHomeFormModal(false));
    dispatch(toogleShowSuccessModal(true));
  };

  const renderModalForm = () => (
    <form className={s.modalForm}>
      <Heading className={s.modalFormTitle} size="s">
        Ваші дані
      </Heading>
      <Input className={s.modalFormInput} placeholder="Ім’я" />
      <Input className={s.modalFormInput} placeholder="E-mail" type="email" />

      <Heading className={s.modalFormTitle} size="s">
        Оберіть спеціаліста
      </Heading>
      <Select className={s.modalFormInput} placeholder="Оберіть сферу" />
      <Select className={s.modalFormInput} placeholder="Оберіть спеціаліста" />
      <Input
        className={s.modalFormInput}
        placeholder="Коментар"
        type="textarea"
      />
    </form>
  );

  return (
    <Modal
      isOpen={isHomeFormModalShow}
      onClose={onCloseHandler}
      primaryButtonLabel="Скасувати"
      secondareButtonLabel="Підтвердити"
      onClickPrimaryButton={onCloseHandler}
      onClickSecondaryButton={onAcceptHandler}
    >
      <Text className={s.modalHeader} size="l">
        Зворотній зв’язок
      </Text>

      <Ptag className={s.modalDescription} size="m" color={black800}>
        Ми зв’яжемось з вами протягом декількох хвилин, щоб надіслати договір на
        ознайомлення
      </Ptag>

      {renderModalForm()}
    </Modal>
  );
};

HomeFormModal.propTypes = {};
