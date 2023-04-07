import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import PropTypes from 'prop-types';

import { Heading, Modal, Text, Input } from '@/components/common';

import {
  selectSpecialist,
  toogleShowSpecialistFormModal,
  toogleShowSpecialistModal
} from '@/store/slices/specialist';

import { enableHTMLScrolling } from '@/utils/utils';

import s from './SpecialistsFormModal.module.scss';

export const SpecialistsFormModal = (props) => {
  const dispatch = useDispatch();
  const selectedSpecialist = useSelector(
    (state) => state.specialist.selectedSpecialist
  );
  const isSpecialistFormModalShow = useSelector(
    (state) => state.specialist.isSpecialistFormModalShow
  );

  const { imageSrc, jobName } = selectedSpecialist || {};

  if (!selectedSpecialist) return <></>;

  const onCloseHandler = () => {
    dispatch(toogleShowSpecialistFormModal(false));
    dispatch(selectSpecialist(null));
    enableHTMLScrolling();
  };

  const onGoBackHandler = () => {
    dispatch(toogleShowSpecialistFormModal(false));

    dispatch(toogleShowSpecialistModal(true));
  };

  const renderSelectedSpecialist = () => (
    <div className={s.modalSelected}>
      <Heading className={s.modalSelectedTitle} size="s">
        Обрано
      </Heading>

      <div className={s.modalSelectedSpecialist}>
        <Image className={s.modalSelectedImage} src={imageSrc} alt={jobName} />
        <Heading size="s">{jobName}</Heading>
      </div>
    </div>
  );

  const renderModalForm = () => (
    <form className={s.modalForm}>
      <Heading className={s.modalFormTitle} size="s">
        Ваші дані
      </Heading>

      <Input className={s.modalFormInput} placeholder="Ім’я" />
      <Input className={s.modalFormInput} placeholder="E-mail" type="email" />
      <Input
        className={s.modalFormInput}
        placeholder="Коментар"
        type="textarea"
      />
    </form>
  );

  return (
    <Modal
      isOpen={isSpecialistFormModalShow}
      onClose={onCloseHandler}
      primaryButtonLabel="Назад"
      secondareButtonLabel="Підтвердити"
      onClickPrimaryButton={onGoBackHandler}
      onClickSecondaryButton={onCloseHandler}
    >
      <Text className={s.modalHeader} size="l">
        Зворотній зв’язок
      </Text>

      {renderSelectedSpecialist()}
      {renderModalForm()}
    </Modal>
  );
};

SpecialistsFormModal.propTypes = {};
