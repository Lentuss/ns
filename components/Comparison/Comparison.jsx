import React from 'react'
import cx from 'classnames';

import { features } from '@/utils/templateData';

import { Wrapper, Htag, ButtonPrimary } from '@/components/common';
import { Features } from '@/components';

import s from './Comparison.module.scss';

export const Comparison = () => {
    return (
        <div className={s.comparison}><Wrapper>
            <div className={s.comparisonInner}>
                <div className={s.comparisonStandart}>
                    <Htag className={s.comparisonHeading} tag='h2'>Стандартний підхід</Htag>
                    <Features data={features.standart} />
                </div>
                <div className={cx(s.comparisonStandart, s.comparisonOutstaff)}>
                    <div className={s.comparisonHeadingWrapper}>
                        <Htag className={s.comparisonHeading} tag='h2'>Аутстафінг</Htag>
                        <ButtonPrimary appearance='grey'>Спробувати</ButtonPrimary>
                    </div>
                    <Features className='featuresOutstaff' data={features.outstaff} />
                </div>
            </div>
        </Wrapper >
        </div >
    )
}
