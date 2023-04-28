import CountUp from 'react-countup';
import cx from 'classnames';

import { inNumbers } from '@/utils/templateData';
import { Wrapper, Htag, Ptag } from '@/components/common';

import NumbersBigPatternIcon from '@/assets/images/svg/patterns/numbers-big-pattern.svg';
import NumbersBigMobilePatternIcon from '@/assets/images/svg/patterns/numbers-big-mobile-pattern.svg';
import NumbersPatternIcon from '@/assets/images/svg/patterns/numbers-pattern.svg';
import NumbersMobilePatternIcon from '@/assets/images/svg/patterns/numbers-mobile-pattern.svg';

import s from './AboutNumbers.module.scss';

export const AboutNumbers = () => {

    return (
        <div className={s.AboutNumbers}>
            <Wrapper>
                <div className={s.AboutNumbersInner}>
                    <Htag tag="h2" className={s.AboutNumbersHeading}>
                        NewStaff в цифрах
                    </Htag>
                    <ul className={s.AboutNumbersList}>
                        {inNumbers.map((item, i) => (
                            <li
                                className={cx(s.AboutNumbersItem, s[`AboutNumbersItem-${i}`])}
                                key={`item${i}`}
                            >
                                <div className={s.AboutNumbersNumber}>
                                    {item.number && (
                                        <CountUp
                                            end={item.number}
                                            scrollSpyOnce
                                            scrollSpyDelay={100}
                                            enableScrollSpy
                                        />
                                    )}
                                </div>
                                <Ptag className={s.AboutNumbersText}>{item.text}</Ptag>
                            </li>
                        ))}
                    </ul>
                </div>
                <NumbersPatternIcon
                    className={cx(s.isNumbersInnerIcon, s.isNumbersDesktopIcon)}
                />
                <NumbersMobilePatternIcon
                    className={cx(s.isNumbersInnerIcon, s.isNumbersMobileIcon)}
                />

                <NumbersBigPatternIcon
                    className={cx(s.isNumbersIcon, s.isNumbersDesktopIcon)}
                />
                <NumbersBigMobilePatternIcon
                    className={cx(s.isNumbersIcon, s.isNumbersMobileIcon)}
                />
            </Wrapper>
        </div>
    );
};
