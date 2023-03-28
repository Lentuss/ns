import React from 'react'
import Link from 'next/link'

import LogoIcon from '@/assets/icons/logo.svg'
import s from './Logo.module.scss';

export const Logo = () => {
    return (
        <Link href={'/'}>
            <LogoIcon className={s.Logo} />
        </Link>
    )
}
