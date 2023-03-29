import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';

import { ButtonOutline, Logo, Select, Wrapper } from '@/components/common';
import { Nav } from '@/components';
import { MobileHeader } from './MobileHeader/MobileHeader';

import { setLanguage, toogleMobileMenu } from '@/store/slices/general';
import { useWindowDimensions } from '@/hooks';

import { langSelectOptions, navLinks } from '@/utils/templateData';
import { BREAKPOINTS } from '@/utils/const';

import MenuIcon from '@/assets/icons/menu.svg';
import CrossIcon from '@/assets/icons/cross.svg';

import s from './Header.module.scss';

export const Header = () => {
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  const isOpenMobileMenu = useSelector(
    (state) => state.general.isOpenMobileMenu
  );
  const seletedLanguage = useSelector((state) => state.general.seletedLanguage);

  const setLanguageHandler = (option) => dispatch(setLanguage(option));

  useEffect(() => {
    setLanguageHandler(langSelectOptions[0]);
  }, []);

  return (
    <>
      <header className={s.header}>
        <Wrapper>
          <div
            className={cx(s.headerInner, { [s.isMenuOpen]: isOpenMobileMenu })}
          >
            <Logo />
            <Nav className={s.headerNav} data={navLinks} />
            <Select
              className={s.headerLangSelect}
              options={langSelectOptions}
              selectedOption={seletedLanguage}
              isLangMode
              isSearchable={false}
              onChange={setLanguageHandler}
            />
            <ButtonOutline className={s.headerButton}>
              Обрати спеціаліста
            </ButtonOutline>

            <div
              className={s.headerMenuButton}
              onClick={() => dispatch(toogleMobileMenu(!isOpenMobileMenu))}
            >
              {isOpenMobileMenu ? (
                <CrossIcon className={s.crossIcon} />
              ) : (
                <MenuIcon className={s.menuIcon} />
              )}
            </div>
          </div>
        </Wrapper>
      </header>

      {width <= BREAKPOINTS.tablet && (
        <MobileHeader
          isOpen={isOpenMobileMenu}
          seletedLanguage={seletedLanguage}
          setLanguage={setLanguageHandler}
        />
      )}
    </>
  );
};
