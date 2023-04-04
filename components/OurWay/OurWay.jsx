import React, { useState } from 'react'
import cx from 'classnames';

import { Wrapper, Htag, Ptag } from '@/components/common';
import { ourWay } from '@/utils/templateData';

import s from './OurWay.module.scss';

export const OurWay = () => {
    return (
        <div className={s.ourWay}>
            <Wrapper>
                <div className={s.ourWayProgress}>
                    <div className={s.ourWayProgressBar}></div>
                </div>
                <div className={s.ourWayInner}>
                    <Htag className={s.ourWayHeading} tag='h2'>Наш шлях</Htag>
                    <div className={s.ourWayWrapper}>
                        {ourWay.map((period) =>
                            <div className={s.ourWayPeriod}>
                                <div className={s.ourWaySticky}>
                                    <div className={s.ourWayLeft}>
                                        {period.year}
                                    </div>
                                    <div className={s.ourWayCenter}>
                                        <div className={s.ourWayCircle}></div>
                                    </div>
                                    <div className={s.ourWayRight}>{period.text}</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Wrapper>


        </div>
    )
}
