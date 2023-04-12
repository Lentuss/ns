import cx from 'classnames';

import { useWindowDimensions } from '@/hooks';
import { BREAKPOINTS } from '@/utils/const';

import s from './Practicing.module.scss';

import { Wrapper, Htag, AccentH } from '@/components/common';
import { Logo } from './Logo/Logo';
import { practicing } from '@/utils/templateData';

export const Practicing = ({ className }) => {
  const { width } = useWindowDimensions();
  let logos = [];
  if (width <= BREAKPOINTS.mobile) {
    logos = practicing.slice(0, 6);
  } else if (width >= BREAKPOINTS.tablet) {
    logos = practicing;
  } else {
    logos = practicing.slice(0, 10);
  }
  return (
    <div className={cx(s.practicing, className)}>
      <Wrapper>
        <div className={s.practicingInner}>
          <Htag tag="h2" className={s.practicingHeading}>
            <AccentH location="practicing">1400 компаній</AccentH>
            <div>вже практикують</div>
            <div>Аутстафінг</div>
          </Htag>
          <Logo data={logos} />
        </div>
      </Wrapper>
    </div>
  );
};
