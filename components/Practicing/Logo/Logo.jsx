import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames';

import s from './Logo.module.scss';

export const Logo = props => {
    const { data, ...lProps } = props;
    return (
        <div className={s.logo}>
            <ul className={s.logoList}>
                {
                    data.map((item, i) =>
                        <li className={cx(s.logoItem, s[`logoItem-${i}`])} key={`item${i}`}>
                            {item}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

Logo.propTypes = { data: PropTypes.array.isRequired }