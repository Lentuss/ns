import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { Expo } from 'gsap/dist/all';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import cx from 'classnames';

import { Wrapper, Htag, AccentH } from '@/components/common';
import { partners } from '@/utils/templateData';

import s from './Partners.module.scss';

export const Partners = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  let entered = false;

  useEffect(() => {
    const ctx = gsap.context((self) => {

      let items = gsap.utils.toArray(".partner");

      gsap.set(items, { opacity: 0 })
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".partners",
          start: 'top 50%',
          onEnter: () => {
            if (!entered) { entered = true; gsap.fromTo(items, { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0, duration: 0.8, stagger: 0.05, ease: Expo.easeOut }) }
          },
        }
      });
    }, ref);
    return () => ctx.revert();
  }, [])

  return (
    <div className={cx(s.partners, 'partners')}>
      <Wrapper>
        <div className={s.partnersInner} ref={ref} >
          <Htag className={s.partnersHeading} tag='h2'>Нам довіряють
            <AccentH location='partners'> 50+ компаній, </AccentH> серед яких
          </Htag>
          <ul className={s.partnersList}>{partners.map((p, i) =>
            <li className={cx(s.partnersItem, 'partner')} key={i}>{p}</li>)}
          </ul>
        </div>
      </Wrapper>
    </div>
  )
}

