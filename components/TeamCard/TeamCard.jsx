import React from 'react'
import Image from 'next/image';
import cx from 'classnames';

import Linkedin from '../../assets/icons/linkedin.svg'
import Twitter from '../../assets/icons/twitter.svg'

import { Heading, Ptag } from '../common';

import s from './TeamCard.module.scss';

export const TeamCard = ({ data }) => {
    const { id, img, name, title, info } = data;

    return (
        <div id={id} className={s.teamCard}>
            <Image src={img} alt={name} className={s.teamCardImg} />
            <div className={s.teamCardOverlay}></div>
            <div className={s.teamCardContent}>
                <Ptag className={s.teamCardName}>{name}</Ptag>
                <Ptag size='m' className={s.teamCardTitle}>{title}</Ptag>
                <Ptag size='m' className={s.teamCardInfo}>{info}</Ptag>
                <div className={s.teamCardSocialsWrapper} >
                    <Linkedin className={s.teamCardSocials} />
                    <Twitter className={s.teamCardSocials} />
                </div>
            </div>
        </div>
    )
}
