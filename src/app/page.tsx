import { Suspense } from 'react';
import CalenderSelector from '@/features/calender/logics/CalenderSelector';
import { CalenderHeader } from '@/features/calender/components/CalenderHeader';
import { GoPlus } from 'react-icons/go';
import { MuiFloatingAction } from '@/components/mui/FloatingAction';
import styles from './page.module.scss';

export default function Page() {
  return (
    <>
      <CalenderHeader />
      <Suspense fallback={<div>loading...</div>}>
        <CalenderSelector />
      </Suspense>
      <div className={styles.floatingAction}>
        <MuiFloatingAction size="large" color="primary" aria-label="postCalender">
          <GoPlus className={styles.icon} />
        </MuiFloatingAction>
      </div>
    </>
  );
}
