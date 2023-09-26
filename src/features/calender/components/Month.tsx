import React from 'react';
import { useTargetDayContext } from '@/infrastructure/context/target-day';
import { useTargetMonthContext } from '@/infrastructure/context/target-month';
import { useTargetYearContext } from '@/infrastructure/context/target-year';
import { getMonth } from '../logics/dayjs';
import { DateNumber, Weekday } from './atoms/DayText';
import styles from './Month.module.scss';

export default function Month() {
  const { targetMonth } = useTargetMonthContext();
  const { targetDay } = useTargetDayContext();
  const { targetYear } = useTargetYearContext();

  const month = getMonth(targetDay, targetMonth, targetYear);

  const weekday = ['日', '月', '火', '水', '木', '金', '土'];

  return (
    <>
      <div className={styles.weekBox}>
        {weekday.map((weekday, index) => (
          <div className={styles.week} key={index}>
            <Weekday weekday={weekday} index={index} />
          </div>
        ))}
      </div>
      <div className={styles.weekLine}>
        {month.map((week, weekIndex) => (
          <React.Fragment key={weekIndex}>
            {week.map((day, dayIndex) => (
              <div className={styles.dayBox} key={dayIndex}>
                <DateNumber day={day} index={dayIndex} key={dayIndex} />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
