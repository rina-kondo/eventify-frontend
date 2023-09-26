import { Suspense } from 'react';
import CalenderSelector from '@/features/calender/logics/CalenderSelector';
import { CalenderHeader } from '@/features/calender/components/CalenderHeader';
import { GoPlus } from 'react-icons/go';
import CustomFloatingAction from '@/components/mui/FloatingAction';
import styles from './page.module.scss';

export default function Page() {
  return (
    <>
      <CalenderHeader />
      <Suspense fallback={<div>loading...</div>}>
        <CalenderSelector />
      </Suspense>
      <div className={styles.floatingAction}>
        <CustomFloatingAction size="large" color="primary" aria-label="postCalender">
          <GoPlus className={styles.icon} />
        </CustomFloatingAction>
      </div>
    </>
  );
}
