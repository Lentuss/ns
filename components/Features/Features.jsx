import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames';

import { Subtitle, Htag } from '@/components/common';
import s from './Features.module.scss';

export const Features = props => {
    const { className, line, data } = props;
    return (
        <ul>
            {data.map(item =>
                <li className={cx(s.featuresItem, s[`featuresItem-${line}`])} key={item.question}>
                    <Subtitle className={className}>{item.question}
                    </Subtitle>
                    <Htag tag='h3' className={s.featuresHeading}>{item.answer}</Htag>
                </li>
            )}
        </ul>
    )
}

Features.propTypes = {
    className: PropTypes.string,
    line: PropTypes.string,
    data: PropTypes.array.isRequired
}
