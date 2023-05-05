import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { gsap } from 'gsap/dist/gsap';
import { Power2 } from 'gsap/dist/all';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import cx from 'classnames';

import s from './Cooperation.module.scss';

import { Htag, AccentH, Ptag, Subtitle, Text } from '@/components/common';
import { factors } from '@/utils/templateData';

export const Cooperation = ({ className }) => {
  const ref = useRef(null);
  const lang = useSelector((state) => state.general.seletedLanguage.value);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let factors = gsap.utils.toArray('.factor');
    const ctx = gsap.context((self) => {
      const mm = gsap.matchMedia();
      let tl;
      mm.add(
        '(min-width: 1024px)',
        () => {
          if (lang === 'il') {
            tl = gsap.timeline({
              scrollTrigger: {
                trigger: ref.current,
                start: 'top top',
                end: '+=60%',
                pin: '.cooperation-heading',
                pinSpacing: false
                // markers: true
              }
            });
            gsap.fromTo(
              factors,
              { xPercent: -200 },
              {
                xPercent: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: Power2.easeIn,
                scrollTrigger: { trigger: ref.current, start: 'top 80%' }
              }
            );
          } else {
            gsap.set(factors, { xPercent: 200 });

            tl = gsap.timeline({
              scrollTrigger: {
                trigger: ref.current,
                start: 'top top',
                end: '+=60%',
                pin: '.cooperation-heading',
                pinSpacing: false
                // markers: true
              }
            });
            gsap.fromTo(
              factors,
              { xPercent: 200 },
              {
                xPercent: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: Power2.easeIn,
                scrollTrigger: { trigger: ref.current, start: 'top 80%' }
              }
            );
          }

          setTimeout(() => {
            if (tl.scrollTrigger) {
              tl.scrollTrigger.update();
              tl.scrollTrigger.refresh();
            }
          }, 100);
        },
        ref
      );

      return () => {
        gsap.set(factors, { clearProps: 'all' });
      };
    });
    return () => ctx.revert();
  }, [lang]);

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
