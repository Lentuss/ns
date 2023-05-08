import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { Expo } from 'gsap/dist/all';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export const useElementsAppearance = (ref) => {
    gsap.registerPlugin(ScrollTrigger);
    let entered = false;

    useEffect(() => {
        const ctx = gsap.context((self) => {
            let items = gsap.utils.toArray('.partner');

            gsap.set(items, { opacity: 0 });
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top 50%',
                    onEnter: () => {
                        if (!entered) {
                            entered = true;
                            gsap.fromTo(
                                items,
                                { opacity: 0, yPercent: 100 },
                                {
                                    opacity: 1,
                                    yPercent: 0,
                                    duration: 0.8,
                                    stagger: 0.05,
                                    ease: Expo.easeOut
                                }
                            );
                        }
                    }
                }
            });
        }, ref);
        return () => ctx.revert();
    }, []);
}