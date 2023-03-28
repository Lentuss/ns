import { ButtonOutline, Htag, Wrapper, Chip, Logo, Label, Switch } from '@/components/common';
import { widthLayout } from '@/layout/Layout';

import TestIcon from '@/assets/icons/heart.svg';

function Home() {
  return (
    <>
      <Wrapper>
        HOME
        <Logo />
        <ButtonOutline>ButtonOutline</ButtonOutline>
        <TestIcon />
        <Chip className='active' name='hello' count={155} />
        <Htag tag="h3">TEST Title</Htag>
        <Label name='new label' />
        <Switch />
      </Wrapper>
    </>
  );
}

export default widthLayout(Home);
