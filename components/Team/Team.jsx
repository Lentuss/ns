import React from 'react';
import Link from 'next/link';
import cx from 'classnames';

import { Wrapper, Htag, Ptag } from '@/components/common';
import { TeamCard } from '../TeamCard/TeamCard';

import { team } from '@/utils/templateData';

import Arrow from '../../assets/icons/arrow-up-right.svg';
import TeamPatternIcon from '../../assets/images/svg/patterns/team-pattern.svg';

import s from './Team.module.scss';

export const Team = () => {
  return (
    <div className={s.team}>
      <Wrapper>
        <Htag tag="h2">Команда</Htag>
        <ul className={s.teamCards}>
          <li className={s.teamCardsColumnLeft}>
            <TeamCard data={team[0]} key={team[0].id} />
            <TeamCard data={team[1]} key={team[1].id} />
          </li>
          <li className={s.teamCardsColumnCenter}>
            <TeamCard data={team[2]} key={team[2].id} />
            <TeamCard data={team[3]} key={team[3].id} />
            <TeamCard data={team[4]} key={team[4].id} />
          </li>
          <li className={s.teamCardsColumnRight}>
            <TeamCard data={team[5]} key={team[5].id} />
            <Link href="/careers">
              <div className={s.teamCardsLink}>
                <div className={cx(s.pattern, s.pattern1)}></div>
                <div className={cx(s.pattern, s.pattern2)}></div>
                <div className={cx(s.pattern, s.pattern3)}></div>
                <div className={cx(s.pattern, s.pattern4)}></div>
                <Arrow className={s.teamCardsArrow} />
                <Htag tag="h5">Приєднуйтесь до команди!</Htag>
              </div>
            </Link>
          </li>
        </ul>
      </Wrapper>
      <TeamPatternIcon className={s.teamPattern} />
    </div>
  );
};
