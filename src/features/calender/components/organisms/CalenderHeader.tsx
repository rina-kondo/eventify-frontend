'use client';

import { useTargetDateContext } from '@/store/target-date';
import { useCalenderContext } from '@/store/calender-theme';
import { useHandleTargetDate, useSetTargetToday } from '@/features/calender/hooks/handleTargetDate';
import { useHandleCalenderTheme } from '../../hooks/handleCalenderTheme';
import { MuiThemeSelectButton } from '@/components/mui/SelectButton';
import { PeriodControlButton } from '../molecules/PeriodControlButton';
import styles from './CalenderHeader.module.scss';

export const CalenderHeader = () => {
  const { targetDate } = useTargetDateContext();
  const { handleTargetDate } = useHandleTargetDate();
  const { handleSetTargetToday } = useSetTargetToday();
  const { calenderTheme } = useCalenderContext();
  const { handleCalenderTheme } = useHandleCalenderTheme();

  const toggleButtonProps = [
    { value: 'day', text: '日' },
    { value: 'week', text: '週' },
    { value: 'month', text: '月' },
  ];

  return (
    <div className={styles.calenderHeader}>
      <div className={`${styles.title} ${styles.flexColumn}`}>
        <div className={styles.yearText}>{targetDate.year()}年</div>
        <div className={styles.monthText}>{targetDate.month() + 1}月</div>
      </div>
      <div className={styles.calenderDisplayControllers}>
        <MuiThemeSelectButton
          selectedValue={calenderTheme}
          onChange={handleCalenderTheme}
          selectProps={toggleButtonProps}
        />
        <div className={styles.selectThemeButtons}>
          <PeriodControlButton
            handleIncrementTargetDate={handleTargetDate(+1)}
            handleDecrementTargetDate={handleTargetDate(-1)}
            handleSetTargetToday={handleSetTargetToday}
          />
        </div>
      </div>
    </div>
  );
};
