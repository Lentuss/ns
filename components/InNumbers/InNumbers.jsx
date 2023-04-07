import React from 'react'
import cx from 'classnames';

import { inNumbers } from '@/utils/templateData';
import { Wrapper, Htag, Ptag } from '@/components/common';

import s from './InNumbers.module.scss';

export const InNumbers = () => {
    return (
        <div className={s.inNumbers}>
            <Wrapper>
                <div className={s.inNumbersInner}>
                    <Htag tag='h2' className={s.inNumbersHeading}>NewStaff в цифрах</Htag>
                    <ul className={s.inNumbersList}>
                        {inNumbers.map((item, i) =>
                            <li className={cx(s.inNumbersItem, s[`inNumbersItem-${i}`])} key={`item${i}`}>
                                <div className={s.inNumbersNumber}>{item.number}</div>
                                <Ptag className={s.inNumbersText}>{item.text}</Ptag>
                            </li>)}
                    </ul>
                </div>
            </Wrapper>
        </div>
    )
}
