import { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { Power2 } from 'gsap/dist/all';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';


export const useStickyAnimation = (ref, lang) => {
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
}