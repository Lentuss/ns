import cx from 'classnames';

import s from './Footer.module.scss';

import { Htag, AccentH, ButtonPrimary, ButtonText } from '@/components/common';
import { FooterContacts, FooterCopyright, FooterSocials } from '@/components';

import { navLinks } from '@/utils/templateData';
import { SPECIALISTS_PAGE_ROUTE } from '@/utils/const';

import FooterPatternIcon from '@/assets/images/svg/patterns/footer-pattern.svg';
import FooterMobilePatternIcon from '@/assets/images/svg/patterns/footer-mobile-pattern.svg';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerHeading}>
        <Htag tag="h2" className={s.footerTitle}>
          Українці добре
          <AccentH className={s.footerTitleAccent} location="footer">
            працюють в Revit
          </AccentH>
        </Htag>
        <ButtonPrimary
          className={s.footerBtn}
          appearance="cyan"
          href={SPECIALISTS_PAGE_ROUTE}
        >
          Обрати спеціаліста з Revit
        </ButtonPrimary>
      </div>
      <div className={s.footerInner}>
        <div className={s.footerWrapper}>
          <FooterContacts className={s.footerContacts} />

          <ul className={s.footerNav}>
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <ButtonText appearance="white" href={href}>
                  {label}
                </ButtonText>
              </li>
            ))}
          </ul>
        </div>

        <FooterSocials />
      </div>

      <FooterCopyright className={s.footerCopyright} />

      <FooterPatternIcon
        className={cx(s.footerBgIcon, s.footerBgIconDesktop)}
      />
      <FooterMobilePatternIcon
        className={cx(s.footerBgIcon, s.footerBgIconMobile)}
      />
    </footer>
  );
};
