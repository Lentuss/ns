import { Fragment } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { Nav } from '@/components';
import { Wrapper } from '@/components/common';

import { langSelectOptions, navLinks } from '@/utils/templateData';

import s from './MobileHeader.module.scss';

export const MobileHeader = ({ isOpen, seletedLanguage, setLanguage }) => {
  const renderLanguageSelect = () => (
    <ul className={s.languageSelect}>
      {langSelectOptions.map((option, idx) => (
        <Fragment key={option.value}>
          <li
            className={cx(s.languageSelectItem, {
              [s.isSelected]: seletedLanguage?.value === option.value
            })}
            onClick={() => setLanguage(option)}
          >
            {option.icon}
            {option.label}
          </li>

          {langSelectOptions.length - 1 > idx && (
            <span className={s.languageSelectDivider} />
          )}
        </Fragment>
      ))}
    </ul>
  );

  return (
    <div className={cx(s.mobileHeader, { [s.isOpen]: isOpen })}>
      <Wrapper>
        <div className={s.mobileHeaderInner}>
          <Nav className={s.mobileHeaderNav} data={navLinks} />

          {renderLanguageSelect()}
        </div>
      </Wrapper>
    </div>
  );
};

MobileHeader.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  seletedLanguage: PropTypes.object.isRequired,
  setLanguage: PropTypes.func
};
