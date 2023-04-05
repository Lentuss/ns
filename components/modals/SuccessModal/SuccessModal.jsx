import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Modal, Text, Ptag } from '@/components/common';

import { toogleShowSuccessModal } from '@/store/slices/specialist';

import { enableHTMLScrolling } from '@/utils/utils';
import { MAIN_PAGE_ROUTE, black800 } from '@/utils/const';

import s from './SuccessModal.module.scss';

export const SuccessModal = (props) => {
  const dispatch = useDispatch();
  const { push } = useRouter();

  const isSuccessModalShow = useSelector(
    (state) => state.specialist.isSuccessModalShow
  );

  const onCloseHandler = () => {
    dispatch(toogleShowSuccessModal(false));
    enableHTMLScrolling();
  };

  const onGoToMainPage = () => {
    dispatch(toogleShowSuccessModal(false));
    enableHTMLScrolling();
    push(MAIN_PAGE_ROUTE);
  };

  return (
    <Modal
      className={s.modalBody}
      bottomButtonsClassName={s.modalBottomButtons}
      isOpen={isSuccessModalShow}
      onClose={onCloseHandler}
      primaryButtonLabel="Закрити"
      secondareButtonLabel="На головну"
      onClickPrimaryButton={onCloseHandler}
      onClickSecondaryButton={onGoToMainPage}
    >
      <Text className={s.modalHeader} size="l">
        Дякуємо!
      </Text>

      <Ptag className={s.modalDescription} size="m" color={black800}>
        Ми зв’яжемось з вами протягом декількох хвилин, щоб надіслати договір на
        ознайомлення
      </Ptag>
    </Modal>
  );
};

SuccessModal.propTypes = {};
