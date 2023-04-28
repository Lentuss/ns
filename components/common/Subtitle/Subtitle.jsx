import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './Subtitle.module.scss';

export const Subtitle = props => {
    const { className, size = 'large', children } = props
    return (
        <p className={cx(s.Subtitle, s[`Subtitle-${size}`], className)}>{children}</p>
    )
}

Subtitle.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['large', 'small', 'thin', 'high']),
    children: PropTypes.node.isRequired
}