import { memo } from 'react';
import cx from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';

import s from './Nav.module.scss';

export const Nav = memo(({ className, data }) => (
  <nav className={cx(s.nav, className)}>
    {data.map(({ label, href }) => (
      <li className={s.navItem} key={label}>
        <Link className={s.navItemLink} href={href}>
          {label}
        </Link>
      </li>
    ))}
  </nav>
));

Nav.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired
};
