import { ButtonOutline, Htag, Select, Wrapper, Chip, Logo, Label, Switch } from '@/components/common';
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
        <Logo />
        <ButtonOutline>ButtonOutline</ButtonOutline>
        <TestIcon />
        <Chip className="active" name="hello" count={155} />
        <Htag tag="h3">TEST Title</Htag>
        <Select
          options={options}
          selectedOption={selectedOption}
          onChange={setSelectedOption}
        />
        <Label name="new label" />
        <Switch isChecked={true} />
      </Wrapper>
    </div>
  );
}

export default widthLayout(Home);
