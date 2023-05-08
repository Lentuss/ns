import React, { useRef } from 'react';
import cx from 'classnames';

import { Wrapper, Htag, Ptag } from '@/components/common';
import { ourWay } from '@/utils/templateData';
import { useTimelineAnimation } from '@/hooks';

import s from './OurWay.module.scss';

export const OurWay = () => {
    const ref = useRef(null);
    useTimelineAnimation(ref)

    return (
        <div className={s.ourWay}>
            <Wrapper>
                <div className={s.ourWayInner}>
                    <Htag className={s.ourWayHeading} tag="h2">
                        Наш шлях
                    </Htag>
                    <div className={s.ourWayWrapper} ref={ref}>
                        {ourWay.map((period) => (
                            <div
                                className={cx(s.ourWayPeriodWrapper, 'wrapper')}
                                key={period.year}
                            >
                                <div className={cx(s.ourWayPeriod, 'section')}>
                                    <div className={cx(s.ourWayCenter, 'center')}>
                                        <div className={cx(s.ourWayProgress, 'progress')}>
                                            <div className={cx(s.ourWayProgressBar)}></div>
                                            <div className={cx(s.ourWayCircle, 'circle')}></div>
                                        </div>
                                    </div>
                                    <div className={cx(s.ourWayTextWrapper, 'contentWrapper')}>
                                        <div className={cx(s.ourWayLeft, 'leftSide', 'accent')}>
                                            {period.year}
                                        </div>
                                        <Ptag className={cx(s.ourWayRight, 'rightSide')} size="m">
                                            {period.text}
                                        </Ptag>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};
