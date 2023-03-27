import { memo } from 'react';
import cx from 'classnames';

import { PtagProps } from './Ptag.props';

import s from './Ptag.module.css';

export const Ptag = memo((props: PtagProps): JSX.Element => {
    const { className, size = 's', children, ...pProps } = props;

    return (
        <p className={cx(s.Ptag, s[`Ptag-${size}`], className)} {...pProps}>
            {children}
        </p>
    );
});
