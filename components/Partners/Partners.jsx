import cx from 'classnames';

import { Wrapper, Htag, AccentH } from '@/components/common';
import { partners } from '@/utils/templateData';

import s from './Partners.module.scss';

export const Partners = ({ className }) => {
  return (
    <div className={cx(s.partners, className)}>
      <Wrapper>
        <div className={s.partnersInner}>
          <Htag className={s.partnersHeading} tag="h2">
            Нам довіряють
            <AccentH location="partners"> 50+ компаній, </AccentH>
            серед яких
          </Htag>
          <ul className={s.partnersList}>
            {partners.map((p, i) => (
              <li className={s.partnersItem} key={i}>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </div>
  );
};
