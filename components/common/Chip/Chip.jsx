import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames';

import s from './Chip.module.scss';

export const Chip = props => {
    const { className, name, count, ...cProps } = props
    return (
        <div className={cx(s.Chip, className)} {...cProps}> {name}
            <span className={s.Counter}>{count}</span>
        </div>
    )
}

Chip.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
}