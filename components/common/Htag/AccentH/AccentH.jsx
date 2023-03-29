import React from 'react'
import cx from 'classnames';
import PropTypes from 'prop-types';

import { Htag } from '../..';

import s from './AccentH.module.scss';

export const AccentH = props => {
    const { className, location, children, ...hProps } = props;
    return (
        <Htag className={cx(s.AccentH, className)}
            {...hProps}>
            {children}
            <div className={cx(s.line, s[`line-${location}`])} ></div>
        </Htag>

    )
}

AccentH.propTypes = {
    className: PropTypes.string,
    location: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}
