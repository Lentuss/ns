import Link from 'next/link';

import s from './Footer.module.scss';

import { Htag, AccentH, ButtonPrimary } from '@/components/common';
import { FooterContacts, FooterCopyright, FooterSocials } from '@/components';

import { navLinks } from '@/utils/templateData';
import { SPECIALISTS_PAGE_ROUTE } from '@/utils/const';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerHeading}>
        <Htag tag="h2" className={s.footerTitle}>
          Українці добре<AccentH location="footer">працюють в Revit</AccentH>
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
              <li className={s.footerNavItem} key={label}>
                <Link className={s.footerNavItemLink} href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <FooterSocials />
      </div>

      <FooterCopyright className={s.footerCopyright} />
    </footer>
  );
};
