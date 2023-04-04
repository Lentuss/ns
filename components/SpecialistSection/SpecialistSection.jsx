import PropTypes from 'prop-types';

import { AccentH, ButtonOutline, Htag, Wrapper } from '../common';
import { SpecialistCards } from '..';

import s from './SpecialistSection.module.scss';

export const SpecialistSection = ({ className, title, accent, href }) => {
  return (
    <section className={className}>
      <Wrapper>
        <div className={s.specialistSectionInner}>
          <Htag className={s.specialistSectionTitle} tag="h3">
            {title}
            <AccentH className={s.specialistSectionTitleAccent}>
              {accent}
            </AccentH>
          </Htag>

          {href && (
            <ButtonOutline
              className={s.specialistSectionButton}
              appearance="black"
              href={href}
            >
              Переглянути більше
            </ButtonOutline>
          )}

          <SpecialistCards className={s.specialistSectionList} />
        </div>
      </Wrapper>
    </section>
  );
};

SpecialistSection.propTypes = {
  title: PropTypes.string.isRequired,
  accent: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string
};
