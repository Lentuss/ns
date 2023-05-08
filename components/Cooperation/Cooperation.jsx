import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import cx from 'classnames';

import s from './Cooperation.module.scss';

import { Htag, AccentH, Ptag, Subtitle, Text } from '@/components/common';
import { factors } from '@/utils/templateData';
import { useStickyAnimation } from '@/hooks';

export const Cooperation = ({ className }) => {
  const ref = useRef(null);
  const lang = useSelector((state) => state.general.seletedLanguage.value);
  useStickyAnimation(ref, lang)

  return (
    <div className={cx(s.cooperation, 'cooperation', className)} ref={ref}>
      <div className={s.cooperationInner}>
        <div className={cx(s.cooperationWrapper, 'cooperation-heading')}>
          <div className={cx(s.cooperationHeading)}>
            <Htag tag="h2">
              <div>Ми зосереджені</div>
              <div>на 5-ти ключових</div>
              <div> факторах</div>
              <AccentH location="cooperation">успішної співпраці</AccentH>
            </Htag>
          </div>
        </div>
        <div className={s.cooperationFactors}>
          <ul className={s.factors}>
            {factors.map((item) => (
              <li className={cx(s.factorsItem, 'factor')} key={item.id}>
                <div className={s.factorsHeading}>
                  <Subtitle size="thin">{item.id}</Subtitle>
                  <Text size="l">{item.title}</Text>
                </div>
                <Ptag className={s.factorsText} size="m">
                  {item.text}
                </Ptag>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
