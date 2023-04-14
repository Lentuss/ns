import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Modal,
  Text,
  Ptag,
  Heading,
  ButtonPrimary,
  Switch
} from '@/components/common';

import { enableHTMLScrolling } from '@/utils/utils';
import { black800, pinkPrimary } from '@/utils/const';
import { cookiesModalConfigData } from '@/utils/templateData';
import { toggleCookiesModal } from '@/store/slices/general';

import s from './CookiesModal.module.scss';

const cookiesConfigBase = cookiesModalConfigData.reduce(
  (acc, config) => ({ ...acc, [config.id]: false }),
  {}
);

export const CookiesModal = () => {
  const dispatch = useDispatch();
  const [cookiesConfig, setCookiesConfig] = useState(cookiesConfigBase);

  const isShowCookiesModal = useSelector(
    (state) => state.general.isShowCookiesModal
  );

  const onCloseHandler = useCallback(() => {
    dispatch(toggleCookiesModal(false));
    enableHTMLScrolling();
  }, [isShowCookiesModal]);

  const setCookiesConfigHandler = (id) => {
    setCookiesConfig({
      ...cookiesConfig,
      [id]: !cookiesConfig[id]
    });
  };

  const onCookiesHandler = (bool = true) => {
    const configs = { ...cookiesConfigBase };
    Object.keys(configs).forEach((key) => (configs[key] = bool));

    setCookiesConfig(configs);
    // onCloseHandler();
  };

  const renderModalHead = () => (
    <div className={s.modalHead}>
      <Text className={s.modalHeadTitle} size="l">
        Налаштування конфіденційності
      </Text>
      <Ptag size="m" color={black800}>
        Коли ви відвідуєте веб-сайти, вони можуть зберігати або отримувати дані
        у вашому браузері. Це сховище часто необхідне для базової
        функціональності веб-сайту. Сховище може використовуватися для
        маркетингу, аналітики та персоналізації сайту, наприклад для зберігання
        ваших уподобань. Конфіденційність важлива для нас, тому ви можете
        вимкнути певні типи зберігання, які можуть бути непотрібними для
        базового функціонування веб-сайту. Блокування категорій може вплинути на
        роботу веб-сайту.
      </Ptag>

      <div className={s.modalHeadButtons}>
        <ButtonPrimary
          onClick={() => onCookiesHandler(false)}
          appearance="grey"
        >
          Відхилити усі
        </ButtonPrimary>
        <ButtonPrimary onClick={() => onCookiesHandler(true)}>
          Підтвердити
        </ButtonPrimary>
      </div>
    </div>
  );

  const renderModalConfig = () => (
    <div className={s.modalConfig}>
      <Heading className={s.modalConfigTitle}>Керування налаштуваннями</Heading>
      <ul className={s.modalConfigList}>
        {cookiesModalConfigData.map(
          ({ id, title, description, isAlwaysActive }) => (
            <li className={s.modalConfigItem} key={id}>
              <Heading className={s.modalConfigItemTitle} size="s">
                {title}
              </Heading>
              {isAlwaysActive ? (
                <Ptag
                  className={s.modalConfigItemSwitch}
                  size="m"
                  color={pinkPrimary}
                >
                  Завжди активно
                </Ptag>
              ) : (
                <Switch
                  className={s.modalConfigItemSwitch}
                  onChange={() => setCookiesConfigHandler(id)}
                  isChecked={cookiesConfig[id]}
                >
                  Switch
                </Switch>
              )}
              <Ptag className={s.modalConfigItemDescription} size="m">
                {description}
              </Ptag>
            </li>
          )
        )}
      </ul>
    </div>
  );

  return (
    <Modal
      bottomButtonsClassName={s.modalBottomButtons}
      isOpen={isShowCookiesModal}
      onClose={onCloseHandler}
      secondareButtonLabel="Зберегти мої налаштування"
      // onClickSecondaryButton={}
    >
      {renderModalHead()}
      {renderModalConfig()}
    </Modal>
  );
};
