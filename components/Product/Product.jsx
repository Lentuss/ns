import React from 'react'
import { Wrapper, Htag, Ptag } from '@/components/common';

import s from './Product.module.scss';

export const Product = () => {
    return (
        <Wrapper>
            <div className={s.product}>
                <Htag tag='h2'>Продукт</Htag>
                <Ptag size='m' className={s.productText}>Ми тісно співпрацюєм з Ізраїльским ринком. Всі працівники проходять відбір не тільки по професійним навичкам але і по особистим цінностям. Для нас важливо, щоб працівник, який буде взаємодіяти з вами, міг легко адаптуватись під культуру вашої компанії, і бути ефективним.</Ptag>
            </div>
        </Wrapper>
    )
}
