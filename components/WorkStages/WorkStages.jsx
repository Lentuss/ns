import React, { useEffect, useRef } from 'react'
import cx from 'classnames';
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { Wrapper, Htag, Subtitle } from '@/components/common';
import { Stage } from './Stage/Stage';

import s from './WorkStages.module.scss';

export const WorkStages = () => {
    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const ctx = gsap.context((self) => {

            let sections = gsap.utils.toArray(".stage");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ref.current,
                    pin: true,
                    scrub: true,
                    snap: {
                        snapTo: "labelsDirectional",
                        // duration: { min: 0.1, max: 0.3 },
                        duration: 0.1,
                        ease: "power1.inOut"

                    }
                }
            })
                .addLabel('stage 1')
                .to('.box5', {
                    xPercent: 100,
                    duration: 0.1
                })
                .to(sections, {
                    yPercent: -100,
                    ease: "none",
                    duration: 0.1,
                }, '-=0.1')
                .to('.box8', {
                    xPercent: 100,
                    duration: 0.1
                }, '-=0.1')
                .addLabel('stage 2')
                .to('.box4', {
                    yPercent: -100, duration: 0.1
                })
                .to('.box11', {
                    yPercent: -100, duration: 0.1
                }, '-=0.1')
                .to(sections, {
                    yPercent: -200,
                    ease: "none",
                    duration: 0.1,
                }, '-=0.1')
                .to('.box15', {
                    yPercent: -100, duration: 0.1
                }, '-=0.1')
                .addLabel('stage 3')
                .to('.box13', {
                    yPercent: -300, duration: 0.1
                })
                .to('.box14', {
                    yPercent: -200, xPercent: -100
                }, '-=0.1')
                .to('.box5', {
                    yPercent: 100, duration: 0.1
                }, '-=0.1')
                .to(sections, {
                    yPercent: -300,
                    ease: "none",
                    duration: 0.1,
                }, '-=0.1')
                .to('.box2', {
                    yPercent: 100, xPercent: 100, duration: 0.1
                }, '-=0.1')
                .to('.box8', {
                    yPercent: 100, duration: 0.1
                }, '-=0.1')
                .to('.box15', {
                    yPercent: 0, duration: 0.1
                }, '-=0.1')
                .addLabel('stage 4')

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
                        <div className={cx(s.workStagesWrapper, 'block')}>
                            <Htag tag='h3' className={cx(s.workStagesText, 'stage')}>Обираєте спеціаліста</Htag>
                            <Htag tag='h3' className={cx(s.workStagesText, 'stage', 'stage2')}>Ознайом&shy;люєтесь з договором</Htag>
                            <Htag tag='h3' className={cx(s.workStagesText, 'stage', 'stage3')}>Підписуємо договір</Htag>
                            <Htag tag='h3' className={cx(s.workStagesText, 'stage', 'stage4')}>Спеціаліст починає роботу</Htag>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

