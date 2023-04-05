import { memo } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { ButtonText } from '../common';

import s from './Nav.module.scss';

export const Nav = memo(({ className, data, currentPathname }) => (
  <nav className={cx(s.nav, className)}>
    {data.map(({ label, href }) => (
      <li className={s.navItem} key={label}>
        <ButtonText
          className={s.navItemLink}
          href={href}
          isActive={currentPathname?.includes(href)}
        >
          {label}
        </ButtonText>
      </li>
    ))}
  </nav>
));

Nav.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
  currentPathname: PropTypes.string
};
