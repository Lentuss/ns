import { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import { cyanPrimary, black900 } from '@/utils/const';

export const useTimelineAnimation = (ref) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context((self) => {
            const sections = [...ref.current.querySelectorAll('.section')];

            sections.forEach((section) => {
                const tl = gsap.timeline();
                const sectionHeight = section.closest('.wrapper').clientHeight;
                const contentHeight =
                    section.querySelector('.contentWrapper').clientHeight;

                tl.to(section.querySelector('.circle'), {
                    backgroundColor: cyanPrimary,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 50%',
                        end: 'top 50%',
                        scrub: true
                    }
                })
                    .to(section.querySelector('.accent'), {
                        color: cyanPrimary,
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 50%',
                            end: 'top 50%',
                            scrub: true
                        }
                    })
                    .to(section.querySelector('.rightSide'), {
                        color: black900,
                        duration: 0.1,
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 50%',
                            end: 'top 50%',
                            scrub: true
                        }
                    })
                    .to(section.querySelector('.center'), {
                        y: contentHeight - 20,
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 50%',
                            end: `+=${sectionHeight - contentHeight - 5}`,
                            scrub: true
                        }
                    })
                    .to(section.querySelector('.progress'), {
                        y: `${sectionHeight - contentHeight}`,
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 50%',
                            end: `+=${sectionHeight - contentHeight - 5}`,
                            scrub: 1
                            // markers: true
                        }
                    });
            });
            return () => {
                gsap.set(sections, { clearProps: 'all' });
            };
        });
        return () => ctx.revert();
    }, []);
}