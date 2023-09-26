import { useTargetDayContext } from '@/infrastructure/context/target-day';
import { useTargetMonthContext } from '@/infrastructure/context/target-month';
import { useTargetYearContext } from '@/infrastructure/context/target-year';
import { getDay, getWeek } from '../logics/dayjs';
import { DateNumber, Weekday } from './atoms/DayText';
import { EmptyCell, TimeLine } from './atoms/TimeLine';
import styles from './Week.module.scss';

export default function Week() {
  const { targetMonth } = useTargetMonthContext();
  const { targetDay } = useTargetDayContext();
  const { targetYear } = useTargetYearContext();

  const week = getWeek(targetDay, targetMonth, targetYear);
  const now = getDay();

  return (
    <>
      <div className={styles.dateWeekdayPair}>
        {week.map((day, dayIndex) => (
          <div className={styles.dateWeekdayBox} key={dayIndex}>
            <Weekday weekday={day.format('ddd')} index={dayIndex} size={'small'} />
            <div className={styles.dateBox}>
              <DateNumber day={day} index={dayIndex} size={'large'} />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.calenderBody}>
        <TimeLine />
        <div className={styles.emptyCells}>
          {week.map((day) => (
            <EmptyCell key={day.format('D')} />
          ))}
        </div>
      </div>
    </>
  );
}
