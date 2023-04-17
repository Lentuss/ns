import { useRef } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { useMoveInAnimation } from '@/hooks';
import { MOVE_IN_ANIMATION_TIME } from '@/utils/const';

import MainLine from '@/assets/images/svg/accent-lines/l-main.svg';
import SpecialistsLine from '@/assets/images/svg/accent-lines/arr-specialists.svg';
import CompaniesLine from '@/assets/images/svg/accent-lines/l-companies.svg';
import PracticingLine from '@/assets/images/svg/accent-lines/line.svg';
import CooperationLine from '@/assets/images/svg/accent-lines/arr-cooperation.svg';
import WorksLine from '@/assets/images/svg/accent-lines/l-works.svg';
import AboutLine from '@/assets/images/svg/accent-lines/l-about.svg';
import ContactsLine from '@/assets/images/svg/accent-lines/l-contacts.svg';
import FooterLine from '@/assets/images/svg/accent-lines/l-footer.svg';

import s from './AccentH.module.scss';

// &nbsp;

const LOCATIONS_TYPES = {
  main: 'main',
  specialists: 'specialists',
  partners: 'partners',
  practicing: 'practicing',
  cooperation: 'cooperation',
  footer: 'footer',
  works: 'works',
  about: 'about',
  contacts: 'contacts'
};

export const AccentH = (props) => {
  const { className, location, children, ...hProps } = props;

  const accentLineRef = useRef(null);

  const startAnimation = useMoveInAnimation(
    accentLineRef,
    MOVE_IN_ANIMATION_TIME
  );

  return (
    <div className={cx(s.AccentH, className)} {...hProps}>
      <span
        className={cx(s.AccentHInner, { [s.isShow]: startAnimation })}
        style={{ position: 'relative' }}
        ref={accentLineRef}
      >
        {children}
        {location === LOCATIONS_TYPES.main && (
          <MainLine className={cx(s.line, s.lineBaseStyle, s.lineMain)} />
        )}
        {location === LOCATIONS_TYPES.specialists && (
          <SpecialistsLine className={cx(s.line, s.lineSpecialists)} />
        )}
        {location === LOCATIONS_TYPES.partners && (
          <CompaniesLine
            className={cx(s.line, s.lineBaseStyle, s.lineCompanies)}
          />
        )}
        {location === LOCATIONS_TYPES.practicing && (
          <PracticingLine
            className={cx(s.line, s.lineBaseStyle, s.linePracticing)}
          />
        )}
        {location === LOCATIONS_TYPES.cooperation && (
          <>
            <CooperationLine className={cx(s.line, s.lineCooperationDesktop)} />
            <PracticingLine
              className={cx(
                s.line,
                s.lineCooperationMobile,
                s.lineBaseStyle,
                s.linePracticing
              )}
            />
          </>
        )}
        {location === LOCATIONS_TYPES.works && (
          <WorksLine className={cx(s.line, s.lineBaseStyle, s.lineWork)} />
        )}
        {location === LOCATIONS_TYPES.about && (
          <AboutLine className={cx(s.line, s.lineBaseStyle, s.lineAbout)} />
        )}
        {location === LOCATIONS_TYPES.contacts && (
          <ContactsLine
            className={cx(s.line, s.lineBaseStyle, s.lineContacts)}
          />
        )}
        {location === LOCATIONS_TYPES.footer && (
          <FooterLine className={cx(s.line, s.lineBaseStyle, s.lineFooter)} />
        )}
      </span>
    </div>
  );
};

AccentH.propTypes = {
  className: PropTypes.string,
  location: PropTypes.oneOf([Object.keys(LOCATIONS_TYPES)]),
  children: PropTypes.node.isRequired
};
