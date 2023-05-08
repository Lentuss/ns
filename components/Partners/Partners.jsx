import React, { useRef } from 'react';
import cx from 'classnames';

import { Wrapper, Htag, AccentH, TextSpace } from '@/components/common';
import { partners } from '@/utils/templateData';
import { useElementsAppearance } from '@/hooks';

import s from './Partners.module.scss';

export const Partners = ({ className }) => {
  const ref = useRef(null);
  useElementsAppearance(ref);

  return (
    <div className={cx(s.partners, 'partners', className)}>
      <Wrapper>
        <div className={s.partnersInner} ref={ref}>
          <Htag className={s.partnersHeading} tag="h2">
            Нам довіряють
            <TextSpace />
            <AccentH location="partners">50+ компаній,</AccentH>
            <TextSpace />
            серед яких
          </Htag>
          <ul className={s.partnersList}>
            {partners.map((p, i) => (
              <li className={cx(s.partnersItem, 'partner')} key={i}>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </div>
  );
};
