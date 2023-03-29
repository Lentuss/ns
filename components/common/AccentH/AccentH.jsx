import React from 'react'
import cx from 'classnames';
import PropTypes from 'prop-types';

import s from './AccentH.module.scss';

export const AccentH = props => {
    const { className, location, children, ...hProps } = props;
    return (
        <div className={cx(s.AccentH, className)}
            {...hProps}>
            {children}
            <div className={cx(s.line, s[`line-${location}`])} ></div>
        </div>

    )
}

AccentH.propTypes = {
    className: PropTypes.string,
    location: PropTypes.oneOf(['main', 'specialists', 'partners', 'practicing', 'cooperation', 'footer', 'works', 'about', 'contacts']),
    children: PropTypes.node.isRequired
}
