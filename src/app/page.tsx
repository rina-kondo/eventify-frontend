import { Suspense } from 'react';
import CalenderSelector from '@/features/calender/logics/CalenderSelector';
import { CalenderHeader } from '@/features/calender/components/CalenderHeader';

export default function Page() {
  return (
    <>
      <CalenderHeader />
      <Suspense fallback={<div>loading...</div>}>
        <CalenderSelector />
      </Suspense>
    </>
  );
}
