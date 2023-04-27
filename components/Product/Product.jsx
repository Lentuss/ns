import React from 'react'
import { Wrapper, Htag, Ptag } from '@/components/common';

import s from './Product.module.scss';

export const Product = () => {
    return (
        <Wrapper>
            <div className={s.product}>
                <Htag tag='h2'>Продукт</Htag>
                <div className={s.productWrapper}>
                    <Ptag size='m' className={s.productText}>NewStaff на даний момент закриває кадрову потребу для ізраїльських компаній.</Ptag>
                    <Ptag size='m' className={s.productText}>Ми пропонуємо до найму компетентних, мотивованих і висококваліфікованих дистанційних працівників, щоб допомогти компаніям заощадити час і гроші на забезпечення всіх потреб пов‘язаних з утриманням робітника та швидко і якісно виконати роботу не витрачаючи час на закриття юридичних питань. Ми поєднуємо лаконічність та професійність, кожен раз знаходячи оптимальне кадрове рішення для кожного бізнесу.</Ptag>
                    <Ptag size='m' className={s.productText}>Після укладання договору, компанія-споживач отримує працівника за 3-10 днів.</Ptag>
                </div>
            </div>
        </Wrapper>
    )
}
