import { widthLayout } from '@/layout/Layout';
import { Outstaff } from '@/components';

function Home() {
  return (
    <div style={{ height: '100vh' }}>
      <Outstaff />
    </div>
  );
}

export default widthLayout(Home);
