import {
  ButtonOutline,
  Htag,
  Select,
  Wrapper,
  Chip,
  Logo,
  Label,
  Switch,
  Input,
  AccentH
} from '@/components/common';
import { widthLayout } from '@/layout/Layout';
import { useState } from 'react';

import TestIcon from '@/assets/icons/heart.svg';

const options = [
  { value: 'chocolate', label: 'Chocolate', icon: <TestIcon /> },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

function Home() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState('');

  return (
    <div style={{ height: '100vh' }}>
      <Wrapper>
        HOME
        <Logo />
        <ButtonOutline>ButtonOutline</ButtonOutline>
        <TestIcon />
        <Chip className="active" name="hello" count={155} />
        <Htag tag="h3">TEST Title</Htag>
        <Htag>Тут і зараз</Htag>
        <Select
          options={options}
          selectedOption={selectedOption}
          onChange={setSelectedOption}
        />
        <Label name="new label" />
        {/* <Switch isChecked={false} /> */}
        <Input
          placeholder="Input"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          type="textarea"
        />
        <AccentH tag='h2' location='specialists'>яких ви шукаєте</AccentH>
        <AccentH tag='h2' location='companies'>50+ компаній,</AccentH>
        <AccentH tag='h2' location='partners'>1400 компаній</AccentH>
        <AccentH tag='h2' location='cooperation'>успішної співпраці</AccentH>
        <AccentH tag='h2' location='contacts'>NEWSTAFF ВІДКРИТИЙ</AccentH>
        <AccentH tag='h2' location='about'>NEWSTAFF</AccentH>
        <AccentH location='works'>в двох словах</AccentH>
      </Wrapper>
    </div>
  );
}

export default widthLayout(Home);
