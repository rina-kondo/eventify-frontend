'use client';

import { useTargetDateContext } from '@/store/target-date';
import { useCalenderContext } from '@/store/calender-theme';
import { useHandleTargetDate, useSetTargetToday } from '@/features/calender/hooks/handleTargetDate';
import { useHandleCalenderTheme } from '../../hooks/handleCalenderTheme';
import { MuiThemeSelectButton } from '@/components/mui/SelectButton';
import { PeriodControlButton } from '../molecules/PeriodControlButton';
import styles from './CalenderHeader.module.scss';
import { calenderThemeDict, dayjsFormats } from '@/dictionary/calender';

export const CalenderHeader = () => {
  const { targetDate } = useTargetDateContext();
  const { handleTargetDate } = useHandleTargetDate();
  const { handleSetTargetToday } = useSetTargetToday();
  const { calenderTheme } = useCalenderContext();
  const { handleCalenderTheme } = useHandleCalenderTheme();

  const calenderThemeProps = Object.keys(calenderThemeDict).map((key) => {
    return { value: key, text: calenderThemeDict[key] };
  });

  return (
    <div className={styles.calenderHeader}>
      <div className={`${styles.title} ${styles.flexColumn}`}>
        <div className={styles.yearText}>{targetDate.format(dayjsFormats.yearText)}</div>
        <div className={styles.monthText}>{targetDate.format(dayjsFormats.monthLongText)}</div>
      </div>
      <div className={styles.calenderDisplayControllers}>
        <MuiThemeSelectButton
          selectedValue={calenderTheme}
          onChange={handleCalenderTheme}
          selectProps={calenderThemeProps}
        />
        <PeriodControlButton
          handleIncrementTargetDate={handleTargetDate(+1)}
          handleDecrementTargetDate={handleTargetDate(-1)}
          handleSetTargetToday={handleSetTargetToday}
        />
      </div>
    </div>
  );
};
