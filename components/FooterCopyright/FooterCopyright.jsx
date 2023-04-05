import Link from 'next/link';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Ptag } from '../common';

import { footerCopyrightLinks } from '@/utils/templateData';

import s from './FooterCopyright.module.scss';

export const FooterCopyright = ({ className }) => {
  return (
    <div className={cx(s.footerCopyright, className)}>
      <Ptag>© NewStaff 2023, Всі права захищені</Ptag>
      <ul className={s.footerTerms}>
        {footerCopyrightLinks.map(({ label, href }) => (
          <li className={s.footerTermsItem} key={label}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

FooterCopyright.propTypes = {
  className: PropTypes.string
};
