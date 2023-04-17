import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { Power2 } from 'gsap/dist/all';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import cx from 'classnames';

import s from './Cooperation.module.scss';

import { Htag, AccentH, Ptag, Subtitle } from '@/components/common';
import { factors } from '@/utils/templateData';

export const Cooperation = ({ className }) => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        let factors = gsap.utils.toArray(".factor");
        gsap.set(factors, { xPercent: 200 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".cooperation-heading",
            start: 'top 100px',
            end: '+=60%',
            pin: true,
          }
        }).fromTo(factors, { xPercent: 200 }, { xPercent: 0, duration: 0.8, stagger: 0.2, ease: Power2.easeIn }, '-=0.2');
      }, ref);
      return () => ctx.revert();
    })
  }, [])

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
                  <Htag tag="h5">{item.title}</Htag>
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
