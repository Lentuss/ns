import React from 'react'

import s from './Cooperation.module.scss';

import { Wrapper, Htag, AccentH, Ptag, Subtitle } from '@/components/common';
import { factors } from '@/utils/templateData';

export const Cooperation = () => {
    return (
        <div className={s.cooperation}>
            <Wrapper>
                <div className={s.cooperationInner}>
                    <div className={s.cooperationHeading}>
                        <Htag tag='h2'>
                            <div>Ми зосереджені</div>
                            <div>на 5-ти ключових</div>
                            <div> факторах</div>
                            <AccentH location='cooperation'>успішної співпраці</AccentH>
                        </Htag>
                    </div>
                    <div className={s.cooperationFactors}>
                        <ul className={s.factors} >{factors.map(item =>
                            <li className={s.factorsItem} key={item.id}>
                                <div className={s.factorsHeading}>
                                    <Subtitle size='thin'>{item.id}</Subtitle>
                                    <Htag tag='h5'>{item.title}</Htag>
                                </div>
                                <Ptag className={s.factorsText} size='m'>{item.text}</Ptag>
                            </li>
                        )}</ul>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}
