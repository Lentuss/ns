import React from 'react'
import cx from 'classnames';

import s from './Stage.module.scss';

export const Stage = () => {

    return (
        <ul className={cx(s.stage, 'container')}>
            <li className={cx(s.stageBox, s.stageBox1, 'box1')}></li>
            <li className={cx(s.stageBox, s.stageBox2, 'box2')}></li>
            <li className={cx(s.stageBox, s.stageBox3, 'box3')}></li>
            <li className={cx(s.stageBox, s.stageBox4, 'box4')}></li>
            <li className={cx(s.stageBox, s.stageBox5, 'box5')}></li>
            <li className={cx(s.stageBox, s.stageBox6, 'box6')}></li>
            <li className={cx(s.stageBox, s.stageBox7, 'box7')}></li>
            <li className={cx(s.stageBox, s.stageBox8, 'box8')}></li>
            <li className={cx(s.stageBox, s.stageBox9, 'box9')}></li>
            <li className={cx(s.stageBox, s.stageBox10, 'box10')}></li>
            <li className={cx(s.stageBox, s.stageBox11, 'box11')}></li>
            <li className={cx(s.stageBox, s.stageBox12, 'box12')}></li>
            <li className={cx(s.stageBox, s.stageBox13, 'box13')}></li>
            <li className={cx(s.stageBox, s.stageBox14, 'box14')}></li>
            <li className={cx(s.stageBox, s.stageBox15, 'box15')}></li>
        </ul>
    )
}
