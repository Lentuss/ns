import { useState } from 'react';

import { ButtonOutline, Htag, Select, Wrapper } from '@/components/common';
import { widthLayout } from '@/layout/Layout';

import TestIcon from '@/assets/icons/heart.svg';

const options = [
  { value: 'chocolate', label: 'Chocolate', icon: <TestIcon /> },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

function Home() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div style={{ height: '100vh' }}>
      <Wrapper>
        HOME
        <ButtonOutline>ButtonOutline</ButtonOutline>
        <TestIcon />
        <Htag tag="h3">TEST Title</Htag>
        <Select
          options={options}
          selectedOption={selectedOption}
          onChange={setSelectedOption}
        />
      </Wrapper>
    </div>
  );
}

export default widthLayout(Home);
