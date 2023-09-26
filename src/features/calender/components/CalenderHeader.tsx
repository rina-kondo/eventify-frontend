'use client';

import { useHandleTargetDate, useSetTargetToday } from '@/features/calender/hooks/handleTargetDate';
import { useTargetMonthContext } from '@/infrastructure/context/target-month';
import { useTargetYearContext } from '@/infrastructure/context/target-year';
import { CustomButton } from '@/components/mui/Button';
import ThemeSelectButton from '@/features/calender/components/ThemeSelectButton';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import styles from './CalenderHeader.module.scss';

export function CalenderHeader() {
  const { targetMonth } = useTargetMonthContext();
  const { targetYear } = useTargetYearContext();
  const { handleTargetDate } = useHandleTargetDate();
  const { handleSetTargetToday } = useSetTargetToday();

  return (
    <>
      <div className={styles.flexRow}>
        <div className={`${styles.title} ${styles.flexColumn}`}>
          <h3>{targetYear}年</h3>
          <h1>{targetMonth + 1}月</h1>
        </div>
        <div className={styles.flexColumn}>
          <ThemeSelectButton />
          <div className={styles.flexRow}>
            <CustomButton
              color="secondary"
              sx={{ background: 'var(--color-light-gray)' }}
              onClick={handleTargetDate(-1)}
            >
              <GoChevronLeft />
            </CustomButton>
            <CustomButton
              color="secondary"
              sx={{ background: 'var(--color-light-gray)', padding: '0.12rem 1rem', fontSize: '0.9rem' }}
              onClick={() => {
                handleSetTargetToday();
              }}
            >
              今日
            </CustomButton>
            <CustomButton
              color="secondary"
              sx={{ background: 'var(--color-light-gray)' }}
              onClick={handleTargetDate(+1)}
            >
              <GoChevronRight />
            </CustomButton>
          </div>
        </div>
      </div>
    </>
  );
}
