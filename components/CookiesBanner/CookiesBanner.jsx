import { useDispatch, useSelector } from 'react-redux';

import { ButtonPrimary, Ptag, Text } from '../common';

import {
  toggleCookiesBanner,
  toggleCookiesModal
} from '@/store/slices/general';
import { black800 } from '@/utils/const';
import { disableHTMLScrolling } from '@/utils/utils';

import CrossIcon from '@/assets/icons/cross.svg';

import s from './CookiesBanner.module.scss';

export const CookiesBanner = () => {
  const dispatch = useDispatch();

  const isShowCookiesBanner = useSelector(
    (state) => state.general.isShowCookiesBanner
  );

  if (!isShowCookiesBanner) return <></>;

  const onShowCookiesModalHandler = () => {
    dispatch(toggleCookiesBanner(false));
    dispatch(toggleCookiesModal(true));
    disableHTMLScrolling();
  };

  const onCloseHandler = () => dispatch(toggleCookiesBanner(false));

  return (
    <div className={s.cookiesBanner}>
      <button className={s.cookiesBannerCloseButton} onClick={onCloseHandler}>
        <CrossIcon />
      </button>

      <Text className={s.cookiesBannerTitle}>Ми використовуємо Cookies</Text>

      <Ptag size="m" color={black800}>
        Цей сайт використовує файли cookie, щоб покращити ваш досвід.
        Продовжуючи, ви погоджуєтеся з нашими Умовами обслуговування та
        Політикою конфіденційності.
      </Ptag>

      <div className={s.cookiesBannerButtons}>
        <ButtonPrimary onClick={onShowCookiesModalHandler} appearance="grey">
          Налаштування
        </ButtonPrimary>
        <ButtonPrimary onClick={onCloseHandler}>Підтвердити</ButtonPrimary>
      </div>
    </div>
  );
};
