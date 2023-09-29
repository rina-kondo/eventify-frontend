import React from 'react';
import { useTargetDayContext } from '@/store/target-day';
import { useTargetMonthContext } from '@/store/target-month';
import { useTargetYearContext } from '@/store/target-year';
import { getMonth } from '../logics/dayjs';
import { DateNumber, Weekday } from './atoms/DayText';
import styles from './Month.module.scss';

const Month = () => {
  const { targetMonth } = useTargetMonthContext();
  const { targetDay } = useTargetDayContext();
  const { targetYear } = useTargetYearContext();

  const month = getMonth(targetDay, targetMonth, targetYear);

  const weekday = ['日', '月', '火', '水', '木', '金', '土'];

  return (
    <>
      <div className={styles.weekDayLine}>
        {weekday.map((weekday, index) => (
          <div key={index}>
            <Weekday weekday={weekday} index={index} />
          </div>
        ))}
      </div>
      <div className={styles.calenderBody}>
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
};

export default Month;
