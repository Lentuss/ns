import React from 'react'
import PropTypes from 'prop-types'

import { Subtitle, Htag } from '@/components/common';
import s from './Features.module.scss';

export const Features = props => {
    const { className, data } = props;
    return (
        <ul>
            {data.map(item =>
                <li className={s.featuresItem} key={item.question}>
                    <Subtitle className={className}>{item.question}
                    </Subtitle>
                    <Htag tag='h3'>{item.answer}</Htag>
                </li>
            )}
        </ul>
    )
}

Features.propTypes = {

}
