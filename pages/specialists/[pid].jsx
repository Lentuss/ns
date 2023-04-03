import { SpecialistsHead } from '@/components';
import { Pagination } from '@/components/common';
import { widthLayout } from '@/layout/Layout';
import { useState } from 'react';

function Specialist() {
  const [activePage, setActivePage] = useState(1);
  const setActivePageHandler = () => {};
  return (
    <>
      <SpecialistsHead />
      <Pagination
        numPages={5}
        activePage={activePage}
        onClick={setActivePage}
      />
    </>
  );
}

export default widthLayout(Specialist);
