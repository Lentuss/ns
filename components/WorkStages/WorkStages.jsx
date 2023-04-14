import React, { useEffect, useRef } from 'react'
import cx from 'classnames';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { Wrapper, Htag, Subtitle } from '@/components/common';
import { Stage } from './Stage/Stage';

import s from './WorkStages.module.scss';

export const WorkStages = () => {
    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    const handleScroll = (event) => {
        const target = event.target;
        const stage = target.querySelector('.stage')
        // console.log(stage)
    };

    useEffect(() => {
        const ctx = gsap.context((self) => {

            let sections = gsap.utils.toArray(".stage");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".container",
                    pin: true,
                    scrub: true,
                    snap: "labelsDirectional",
                }
            })
                .addLabel('stage 1')
                .to('.box5', {
                    xPercent: 100,
                    duration: 1
                })
                .to(sections, {
                    yPercent: -100,
                    ease: "none",
                    duration: 0.5,
                }, '-=0.5')
                .to('.box8', {
                    xPercent: 100,
                    duration: 1
                })
                .addLabel('stage 2')
                .to('.box4', {
                    yPercent: -100
                })
                .to('.box11', {
                    yPercent: -100
                })
                .to(sections, {
                    yPercent: -200,
                    ease: "none",
                    duration: 0.5,
                }, '-=0.5')
                .to('.box15', {
                    yPercent: -100
                })
                .addLabel('stage 3')
                .to('.box13', {
                    yPercent: -300
                })
                .to('.box14', {
                    yPercent: -200, xPercent: -100
                })
                .to('.box5', {
                    yPercent: 100
                })
                .to(sections, {
                    yPercent: -300,
                    ease: "none",
                    duration: 0.5,
                }, '-=0.5')
                .to('.box2', {
                    yPercent: 100, xPercent: 100
                })
                .to('.box8', {
                    yPercent: 100
                })
                .to('.box15', {
                    yPercent: 0
                })
                .addLabel('stage 4')

            // const tl = gsap.timeline();
            // // gsap.set('.box15', { yPercent: 100 });

            // // tl.snapTo('')

            // tl.to(sections, {
            //     yPercent: -100 * (sections.length - 1),
            //     ease: "none",
            //     duration: 0.1,
            //     scrollTrigger: {
            //         trigger: ".container",
            //         pin: true,
            //         scrub: true,
            //         snap: 1 / (sections.length - 1),
            //         // end: "+=450",
            //         markers: { startColor: "brown", endColor: "pink", fontSize: "24px" }
            //     }
            // })
            //     .to('.box5', {
            //         xPercent: 100, duration: 1, scrollTrigger: {
            //             trigger: ".stage2",
            //             endTrigger: '.stage3',

            //             scrub: true,
            //             start: "top 55%",
            //             end: "top 57%",
            //             // markers: true
            //         }
            //     })
            //     .to('.box8', {
            //         xPercent: 100, duration: 1, scrollTrigger: {
            //             trigger: ".stage2",
            //             endTrigger: '.stage3',
            //             scrub: true,
            //             start: "top 55%",
            //             end: "top 57%",
            //         }
            //     })
            //     .to('.box4', {
            //         yPercent: -100, scrollTrigger: {
            //             trigger: ".stage3",
            //             endTrigger: '.stage4',
            //             scrub: true,
            //             start: "top 50%",
            //             end: "top 57%",
            //             // markers: true
            //         }
            //     })
            //     .to('.box11', {
            //         yPercent: -100, scrollTrigger: {
            //             trigger: ".stage3",
            //             endTrigger: '.stage4',
            //             scrub: true,
            //             start: "top 50%",
            //             end: "top 57%",
            //         }
            //     })
            //     .to('.box15', {
            //         yPercent: -100, scrollTrigger: {
            //             trigger: ".stage3",
            //             endTrigger: '.stage4',
            //             scrub: true,
            //             start: "top 50%",
            //             end: "top 57%",
            //         }
            //     })
            //     .to('.box13', {
            //         yPercent: -300, scrollTrigger: {
            //             trigger: ".stage4",
            //             endTrigger: '.stage4',
            //             scrub: true,
            //             start: "top 45%",
            //             end: "bottom 60%",
            //             // markers: { startColor: "blue", endColor: "violet", fontSize: "24px" }
            //         }
            //     })
            //     .to('.box14', {
            //         yPercent: -200, xPercent: -100, scrollTrigger: {
            //             trigger: ".stage4",
            //             endTrigger: '.stage4',
            //             scrub: true,
            //             start: "top 45%",
            //             end: "bottom 60%",
            //             // markers: { startColor: "blue", endColor: "violet", fontSize: "24px" }
            //         }
            //     })
            //     .to('.box5', {
            //         yPercent: 100, scrollTrigger: {
            //             trigger: ".stage4",
            //             endTrigger: '.stage4',
            //             scrub: true,
            //             start: "top 45%",
            //             end: "bottom 60%",
            //             // markers: { startColor: "blue", endColor: "violet", fontSize: "24px" }
            //         }
            //     })
            //     .to('.box2', {
            //         yPercent: 100, xPercent: 100, scrollTrigger: {
            //             trigger: ".stage4",
            //             endTrigger: '.stage4',
            //             scrub: true,
            //             start: "top 45%",
            //             end: "bottom 60%",
            //             // markers: { startColor: "blue", endColor: "violet", fontSize: "24px" }
            //         }
            //     })
            //     .to('.box8', {
            //         yPercent: 100, scrollTrigger: {
            //             trigger: ".stage4",
            //             endTrigger: '.stage4',
            //             scrub: true,
            //             start: "top 45%",
            //             end: "bottom 60%",
            //             // markers: { startColor: "blue", endColor: "violet", fontSize: "24px" }
            //         }
            //     })
            //     .to('.box15', {
            //         yPercent: 0, scrollTrigger: {
            //             trigger: ".stage4",
            //             endTrigger: '.stage4',
            //             scrub: true,
            //             start: "top 45%",
            //             end: "bottom 60%",
            //             // markers: { startColor: "blue", endColor: "violet", fontSize: "24px" }
            //         }
            //     })
            // .fromTo('.box15', { yPercent: -100 }, {
            //     yPercent: 0, scrollTrigger: {
            //         trigger: ".stage4",
            //         endTrigger: '.stage4',
            //         scrub: true,
            //         start: "top 45%",
            //         end: "bottom 60%",
            // markers: { startColor: "blue", endColor: "violet", fontSize: "24px" }
            //     }
            // })

        }, ref);
        return () => ctx.revert();
    }, [])

    return (
        <div className={cx(s.workStages, 'container')} >
            <Wrapper>
                <div className={s.workStagesInner} ref={ref}  >
                    <Stage />
                    <div className={s.workStagesContent}>
                        <Subtitle>Процес співпраці</Subtitle>
                        <div className={cx(s.workStagesWrapper, 'block')} onScroll={handleScroll}>
                            <Htag tag='h2' className={cx(s.workStagesText, 'stage')}>Обираєте спеціаліста</Htag>
                            <Htag tag='h2' className={cx(s.workStagesText, 'stage', 'stage2')}>Ознайом&shy;люєтесь з договором</Htag>
                            <Htag tag='h2' className={cx(s.workStagesText, 'stage', 'stage3')}>Підписуємо договір</Htag>
                            <Htag tag='h2' className={cx(s.workStagesText, 'stage', 'stage4')}>Спеціаліст починає роботу</Htag>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}
