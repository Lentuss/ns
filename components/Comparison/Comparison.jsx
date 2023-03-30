import React from 'react'
import cx from 'classnames';

import { BREAKPOINTS } from '@/utils/const';
import { useWindowDimensions } from '@/hooks';

import { features } from '@/utils/templateData';

import { Wrapper, Htag, ButtonPrimary } from '@/components/common';
import { Features } from '@/components';

import s from './Comparison.module.scss';

export const Comparison = () => {
    const { width } = useWindowDimensions();
    return (
        <div className={s.comparison}><Wrapper>
            <div className={s.comparisonInner}>
                <div className={s.comparisonStandart}>
                    <Htag className={s.comparisonHeading} tag='h3'>Стандартний підхід</Htag>
                    <Features data={features.standart} />
                </div>
                <div className={cx(s.comparisonStandart, s.comparisonOutstaff)}>
                    <div className={s.comparisonHeadingWrapper}>
                        <Htag className={s.comparisonHeading} tag='h3'>Аутстафінг</Htag>
                        {width >= BREAKPOINTS.tablet &&
                            <ButtonPrimary appearance='grey'>Спробувати</ButtonPrimary>
                        }
                    </div>
                    <Features className={s.comparisonFeatures} line='light' data={features.outstaff} />
                    {width <= BREAKPOINTS.tablet && <ButtonPrimary appearance='grey' className={s.comparisonBtn}>Спробувати</ButtonPrimary>}
                </div>
            </div>
        </Wrapper >
        </div >
    )
}
