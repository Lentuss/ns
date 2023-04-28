import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ButtonPrimary } from '..';

import ChevronsIcon from '@/assets/icons/chevrons.svg';
import CrossIcon from '@/assets/icons/cross.svg';

import s from './Modal.module.scss';

export const Modal = ({
  isOpen,
  onClose,
  children,
  onClickPrimaryButton,
  onClickSecondaryButton,
  className,
  bottomButtonsClassName,
  primaryButtonLabel,
  secondareButtonLabel
}) => {
  const modalInnerRef = useRef();

  useEffect(() => {
    if (isOpen) {
      modalInnerRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  return (
    <>
      <div className={cx(s.modal, { [s.isOpen]: isOpen })}>
        <button className={s.modalCloseButton} onClick={onClose}>
          <ChevronsIcon className={s.modalChevronsIcon} />
          <CrossIcon className={s.modalCrossIcon} />
        </button>
        <div className={cx(s.modalInner, className)} ref={modalInnerRef}>
          {children}

          <div className={cx(s.modalBottomButtons, bottomButtonsClassName)}>
            {primaryButtonLabel && (
              <ButtonPrimary appearance="grey" onClick={onClickPrimaryButton}>
                {primaryButtonLabel}
              </ButtonPrimary>
            )}
            {secondareButtonLabel && (
              <ButtonPrimary onClick={onClickSecondaryButton}>
                {secondareButtonLabel}
              </ButtonPrimary>
            )}
          </div>
        </div>
      </div>
      <div
        className={cx(s.modalOverlay, { [s.isShow]: isOpen })}
        onClick={onClose}
      />
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
  onClickPrimaryButton: PropTypes.func,
  onClickSecondaryButton: PropTypes.func,
  primaryButtonLabel: PropTypes.string,
  secondareButtonLabel: PropTypes.string
};
