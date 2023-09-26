import { useTargetDayContext } from '@/infrastructure/context/target-day';
import { useTargetMonthContext } from '@/infrastructure/context/target-month';
import { useTargetYearContext } from '@/infrastructure/context/target-year';
import { getDay } from '../logics/dayjs';
import { DateNumber, Weekday } from './atoms/DayText';
import { EmptyCell, TimeLine } from './atoms/TimeLine';
import styles from './Day.module.scss';

export default function Date() {
  const { targetMonth } = useTargetMonthContext();
  const { targetDay } = useTargetDayContext();
  const { targetYear } = useTargetYearContext();
  const day = getDay(targetDay, targetMonth, targetYear);

  return (
    <>
      <div className={styles.dateWeekdayPair}>
        <Weekday weekday={day.format('ddd')} size={'small'} />
        <DateNumber day={day} size={'large'} />
      </div>
      <div className={styles.calenderBody}>
        <TimeLine />
        <EmptyCell key={day.format('D')} />
      </div>
    </>
  );
}
