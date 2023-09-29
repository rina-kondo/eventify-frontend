'use client';

import { useHandleTargetDate, useSetTargetToday } from '@/features/calender/hooks/handleTargetDate';
import { useTargetDateContext } from '@/store/target-date';
import { MuiButton } from '@/components/mui/Button';
import { ThemeSelectButton } from '@/features/calender/components/molecules/ThemeSelectButton';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import styles from './CalenderHeader.module.scss';

export const CalenderHeader = () => {
  const { targetDate } = useTargetDateContext();
  const { handleTargetDate } = useHandleTargetDate();
  const { handleSetTargetToday } = useSetTargetToday();

  return (
    <div className={styles.calenderHeader}>
      <div className={`${styles.title} ${styles.flexColumn}`}>
        <div className={styles.yearText}>{targetDate.year()}年</div>
        <div className={styles.monthText}>{targetDate.month() + 1}月</div>
      </div>
      <div className={styles.calenderDisplayControllers}>
        <ThemeSelectButton />
        <div className={styles.selectThemeButtons}>
          <MuiButton
            color="secondary"
            sx={{ background: 'var(--color-light-gray)', paddingY: '0.7rem' }}
            onClick={handleTargetDate(-1)}
          >
            <GoChevronLeft />
          </MuiButton>
          <MuiButton
            color="secondary"
            sx={{ background: 'var(--color-light-gray)', paddingY: '0.46rem', fontSize: '0.9rem', marginX: '0.5rem' }}
            onClick={() => {
              handleSetTargetToday();
            }}
          >
            今日
          </MuiButton>
          <MuiButton
            color="secondary"
            sx={{ background: 'var(--color-light-gray)', paddingY: '0.7rem' }}
            onClick={handleTargetDate(+1)}
          >
            <GoChevronRight />
          </MuiButton>
        </div>
      </div>
    </div>
  );
};
