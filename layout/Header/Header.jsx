import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';

import { ButtonOutline, Logo, Select, Wrapper } from '@/components/common';
import { Nav } from '@/components';
import { MobileHeader } from './MobileHeader/MobileHeader';

import { setLanguage, toogleMobileMenu } from '@/store/slices/general';
import { useScrollDirection, useWindowDimensions } from '@/hooks';

import { langSelectOptions, navLinks } from '@/utils/templateData';
import {
  BREAKPOINTS,
  NOT_FOUND_PAGE_ROUTE,
  SPECIALISTS_PAGE_ROUTE
} from '@/utils/const';
import {
  disableHTMLScrolling,
  enableHTMLScrolling,
  isEmpty,
  setAttributeOnHtml,
  setCssVH,
  setPropertyOnHtml
} from '@/utils/utils';

import MenuIcon from '@/assets/icons/menu.svg';
import CrossIcon from '@/assets/icons/cross.svg';

import s from './Header.module.scss';

export const Header = () => {
  const dispatch = useDispatch();
  const { pathname, push, locale, asPath } = useRouter();
  const { width } = useWindowDimensions();
  const direction = useScrollDirection();
  const isOpenMobileMenu = useSelector(
    (state) => state.general.isOpenMobileMenu
  );
  const seletedLanguage = useSelector((state) => state.general.seletedLanguage);

  const setLanguageHandler = (option) => {
    dispatch(setLanguage(option));

    if (pathname.includes(NOT_FOUND_PAGE_ROUTE)) {
      push(NOT_FOUND_PAGE_ROUTE, NOT_FOUND_PAGE_ROUTE, {
        locale: option.value
      });
      return;
    }

    push(asPath, asPath, { locale: option.value });
  };

  const toggleMobileMenuHandler = () => {
    const isWillOpen = !isOpenMobileMenu;

    if (isWillOpen) {
      disableHTMLScrolling();
    } else {
      enableHTMLScrolling();
    }

    dispatch(toogleMobileMenu(isWillOpen));
  };

  useEffect(() => {
    // TMP
    if (isEmpty(seletedLanguage)) {
      setLanguageHandler(langSelectOptions.find((o) => o.value === locale));
    }
    // TMP

    setCssVH();

    window.addEventListener('resize', setCssVH);

    return () => window.removeEventListener('resize', setCssVH);
  }, []);

  useEffect(() => {
    if (isOpenMobileMenu) {
      dispatch(toogleMobileMenu(false));
      enableHTMLScrolling();
    }
  }, [pathname]);

  // TMP
  useEffect(() => {
    if (seletedLanguage.value === 'il') {
      setAttributeOnHtml('dir', 'rtl');
      setPropertyOnHtml('--direction', 'rtl');
    } else {
      setAttributeOnHtml('dir', 'ltr');
      setPropertyOnHtml('--direction', 'ltr');
    }
  }, [seletedLanguage]);
  // TMP

  return (
    <>
      <header className={cx(s.header, { [s.isHidden]: direction === 'down' })}>
        <Wrapper>
          <div
            className={cx(s.headerInner, { [s.isMenuOpen]: isOpenMobileMenu })}
          >
            <Logo />
            <Nav
              className={s.headerNav}
              data={navLinks.slice(1)}
              currentPathname={pathname}
            />
            <Select
              className={s.headerLangSelect}
              options={langSelectOptions}
              selectedOption={seletedLanguage}
              isLangMode
              isSearchable={false}
              onChange={setLanguageHandler}
            />
            <ButtonOutline
              className={s.headerButton}
              href={SPECIALISTS_PAGE_ROUTE}
            >
              Обрати спеціаліста
            </ButtonOutline>

            <div
              className={s.headerMenuButton}
              onClick={toggleMobileMenuHandler}
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
