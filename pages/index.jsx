import { ButtonOutline, Htag, Wrapper, Chip } from '@/components/common';
import { widthLayout } from '@/layout/Layout';

import TestIcon from '@/assets/icons/heart.svg';

function Home() {
  return (
    <>
      <Wrapper>
        HOME
        <ButtonOutline>ButtonOutline</ButtonOutline>
        <TestIcon />
        <Chip className='active' name='hello' count={5} />
        <Htag tag="h3">TEST Title</Htag>
      </Wrapper>
    </>
  );
}

export default widthLayout(Home);
