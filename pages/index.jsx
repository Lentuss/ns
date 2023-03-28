import { ButtonOutline, Wrapper } from '@/components/common';
import { widthLayout } from '@/layout/Layout';

import TestIcon from '@/assets/icons/heart.svg';

function Home() {
  return (
    <>
      <Wrapper>
        HOME
        <ButtonOutline>ButtonOutline</ButtonOutline>
        <TestIcon />
      </Wrapper>
    </>
  );
}

export default widthLayout(Home);
