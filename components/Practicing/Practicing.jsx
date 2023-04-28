import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap/dist/gsap";
import { Back } from 'gsap/dist/all';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import cx from 'classnames';

import { useWindowDimensions } from '@/hooks';
import { BREAKPOINTS } from '@/utils/const';

import s from './Practicing.module.scss';

import { Wrapper, Htag, AccentH } from '@/components/common';
import { Logo } from './Logo/Logo';
import { practicing } from '@/utils/templateData';

import PracticingPatternIcon from '@/assets/images/svg/patterns/practicing-pattern.svg';

export const Practicing = ({ className }) => {
  const { width } = useWindowDimensions();
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  let logos = [];
  let entered = false;

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const mm = gsap.matchMedia();
      let items = gsap.utils.toArray('.logo');
      gsap.set(items, { scale: 0 });

      mm.add('(min-width: 768px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 11%',
            once: true,
            // markers: true,
            onEnter: () => {
              if (!entered) {
                entered = true;
                gsap.fromTo(
                  items,
                  { scale: 0.1 },
                  { scale: 1, duration: 0.6, ease: Back.easeOut }
                );
              }
            }
          }
        });
      })
      mm.add('(max-width: 767px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 30%',
            once: true,
            // markers: true,
            onEnter: () => {
              if (!entered) {
                entered = true;
                gsap.fromTo(
                  items,
                  { scale: 0.1 },
                  { scale: 0.62, duration: 0.6, ease: Back.easeOut }
                );
              }
            }
          }
        });
      })
    }, ref);
    return () => ctx.revert();
  }, [logos]);

  if (width <= BREAKPOINTS.mobile) {
    logos = practicing.slice(0, 6);
  } else if (width >= BREAKPOINTS.tablet) {
    logos = practicing;
  } else {
    logos = practicing.slice(0, 10);
  }
  return (
    <div className={cx(s.practicing, 'practicing', className)} ref={ref}>
      <PracticingPatternIcon className={s.practicingPatternIcon} />
      <Wrapper>
        <div className={s.practicingInner}>
          <Htag tag="h2" className={s.practicingHeading}>
            <AccentH location="practicing">1400 компаній</AccentH>
            <div>вже практикують</div>
            <div>Аутстафінг</div>
          </Htag>
          <Logo data={logos} />
        </div>
      </Wrapper>
    </div>
  );
};
