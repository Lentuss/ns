import { Fragment, useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { Nav } from '@/components';
import { Wrapper } from '@/components/common';

import { langSelectOptions, navLinks } from '@/utils/templateData';

import s from './MobileHeader.module.scss';

export const MobileHeader = ({ isOpen, seletedLanguage, setLanguage }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const selectListRef = useRef(null);
  const selectItemRef = useRef([]);
  const selectActivePointRef = useRef(null);

  useEffect(() => {
    const activeSelectedItem = selectItemRef.current.filter(
      (item) => item.dataset.active === 'true'
    );

    const { clientHeight, clientWidth, offsetLeft } =
      activeSelectedItem[0] || {};

    setSelectedOptions({
      clientHeight,
      clientWidth,
      offsetLeft
    });
  }, [seletedLanguage]);

  const renderLanguageSelect = () => (
    <ul className={s.languageSelect} ref={selectListRef}>
      {langSelectOptions.map((option, idx) => (
        <Fragment key={option.value}>
          <li
            className={s.languageSelectItem}
            onClick={() => setLanguage(option)}
            ref={(el) => (selectItemRef.current[idx] = el)}
            data-active={seletedLanguage?.value === option.value}
          >
            {option.icon}
            {option.label}
          </li>

          {langSelectOptions.length - 1 > idx && (
            <span className={s.languageSelectDivider} />
          )}
        </Fragment>
      ))}
      <span
        className={s.languageSelectActivePoint}
        style={{
          height: selectedOptions?.clientHeight,
          width: selectedOptions?.clientWidth,
          transform: `translateX(calc(${selectedOptions?.offsetLeft}px - 4px))`
        }}
        ref={selectActivePointRef}
      />
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
