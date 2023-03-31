import Link from 'next/link';

import s from './Footer.module.scss';

import { Htag, AccentH, Ptag, Subtitle, ButtonPrimary, ButtonOutline } from '@/components/common';
import { Nav } from '@/components';

import { navLinks } from '@/utils/templateData';

export const Footer = () => {
  return <footer className={s.footer}>
    <div className={s.footerHeading}>
      <Htag tag='h2' className={s.footerTitle}>Українці добре<AccentH location='footer'>працюють в Revit</AccentH></Htag>
      <ButtonPrimary className={s.footerBtn} appearance='cyan'>Обрати спеціаліста з Revit</ButtonPrimary>
    </div>
    <div className={s.footerInner}>
      <div className={s.footerWrapper}>
        <div className={s.footerAddressWrapper}>
          <address className={s.footerAddress}>
            <Subtitle size='small' className={s.footerAddressCountry}>Україна</Subtitle>
            <a href='tel:+380631454778' className={s.footerAddressLink}>+380 (63) 145-47-78</a>
            <a href='email:info@newstaff.co.il' className={s.footerAddressLink}>info@newstaff.co.il</a>
          </address>
          <address className={s.footerAddress}>
            <Subtitle size='small' className={s.footerAddressCountry}>Ізраїль</Subtitle>
            <a href='tel:+972504865294' className={s.footerAddressLink}>+97 (250) 486-5294</a>
            <a href='email:engineers@newstaff.co.il' className={s.footerAddressLink}>engineers@newstaff.co.il</a>
          </address>
        </div>

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
      <div className={s.footerSocials}>
        <ButtonOutline appearance='white' className={s.footerSocialsBtn}>Instagram</ButtonOutline>
        <ButtonOutline appearance='white' className={s.footerSocialsBtn}>YouTube</ButtonOutline>
        <ButtonOutline appearance='white' className={s.footerSocialsBtn}>Telegram</ButtonOutline>
        <ButtonOutline appearance='white' className={s.footerSocialsBtn}>Twitter</ButtonOutline>
      </div>
    </div>
    <div className={s.footerCopyright}>
      <Ptag>© NewStaff 2023, Всі права захищені</Ptag>
      <ul className={s.footerTerms}>
        <li className={s.footerTermsItem}><Link href={'/'}>Посібник користувача</Link></li>
        <li className={s.footerTermsItem}><Link href={'/'}>Політика конфіденційності</Link></li>
        <li className={s.footerTermsItem}><Link href={'/'}>Публічна оферта</Link></li>
        <li className={s.footerTermsItem}><Link href={'/'}>Налаштування Cookie</Link></li>
      </ul>
    </div>
  </footer>;
};
