import { widthLayout } from '@/layout/Layout';
import { Outstaff } from '@/components';
import { Input } from '@/components/common';

function Home() {
  return (
    <div style={{ height: '100vh' }}>
      <Outstaff />

      <Input placeholder="Test" />
    </div>
  );
}

export default widthLayout(Home);
