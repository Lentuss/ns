import TestIcon from '@/assets/icons/heart.svg';
import { Icon } from '@/components/common';

export default function Home() {
  return (
    <>
      <main>
        HOME
        <p>TEST TEXT</p>
        <Icon icon="alert" color="#000" size={15} />
        <TestIcon />
      </main>
    </>
  );
}
