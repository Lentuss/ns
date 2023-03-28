import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames';

import s from './Chip.module.css';

const Chip = props => {
    const { className, name, count, ...pProps } = props
    return (
        <div className={cx(s.Chip, className)} {...pProps}> {name}
            <span className={cx(s.Counter, className)}>{count}</span>
        </div>
    )
}

Chip.propTypes = {}

export default Chip