import React, { useState, useRef, useEffect } from 'react'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import cx from 'classnames';

import { Wrapper, Htag, Ptag } from '@/components/common';
import { ourWay } from '@/utils/templateData';

import s from './OurWay.module.scss';
import { cyanPrimary, black900 } from '@/utils/const';

export const OurWay = () => {
    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const ctx = gsap.context((self) => {
            const sections = self.selector('.section');

            sections.forEach((section) => {
                const tl = gsap.timeline();
                const textHeight = section.querySelector('.rightSide').clientHeight;
                const yearHeight = section.querySelector('.leftSide').clientHeight;
                const maxHeight = textHeight > yearHeight ? textHeight : yearHeight;
                const sectionHeight = section.closest('.wrapper').clientHeight;

                tl
                    .to(section.querySelector('.circle'), {
                        backgroundColor: cyanPrimary,
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 50%',
                            end: 'top 50%',
                            scrub: true,
                        },
                    })
                    .to(section.querySelector('.accent'), {
                        color: cyanPrimary,
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 50%',
                            end: 'top 50%',
                            scrub: true,
                        },
                    })
                    .to(section.querySelector('.rightSide'), {
                        color: black900,
                        duration: 0.1,
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 50%',
                            end: 'top 50%',
                            scrub: true,
                        },
                    })
                    .to(section.querySelector('.center'), {
                        y: maxHeight - 20, scrollTrigger: {
                            trigger: section,
                            start: 'top 50%',
                            end: `+=${sectionHeight - maxHeight - 5}`,
                            scrub: true,
                        },
                    })
                    .to(section, {
                        y: `${sectionHeight - maxHeight}`,
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 50%',
                            end: `+=${sectionHeight - maxHeight - 5}`,
                            scrub: 1,
                            // markers: true
                        },
                    })

            });
        }, ref);
        return () => ctx.revert();
    }, []);

    return (
        <div className={s.ourWay}>
            <Wrapper>
                <div className={s.ourWayInner}>
                    <Htag className={s.ourWayHeading} tag='h2'>Наш шлях</Htag>
                    <div className={s.ourWayWrapper} ref={ref}>
                        {ourWay.map((period) =>

                            <div className={cx(s.ourWayPeriodWrapper, 'wrapper')} key={period.year}>

                                <div className={cx(s.ourWayPeriod, 'section')}>
                                    <div className={cx(s.ourWayLeft, 'leftSide', 'accent')}>
                                        {period.year}
                                    </div>
                                    <div className={cx(s.ourWayCenter, 'center')}>
                                        <div className={cx(s.ourWayProgress)}>
                                            <div className={cx(s.ourWayProgressBar)}></div>
                                            <div className={cx(s.ourWayCircle, 'circle')}></div>
                                        </div>
                                    </div>
                                    <Ptag className={cx(s.ourWayRight, 'rightSide')}>{period.text}</Ptag>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}
