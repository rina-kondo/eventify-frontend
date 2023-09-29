import { useTargetDateContext } from '@/store/target-date';
import { getDay, getWeek } from '@/features/calender/utils/dayjs';
import { DayText } from '../atoms/DayText';
import { WeekdayText } from '../atoms/WeekdayText';
import { TimeSlot } from '../molecules/TimeSlot';
import { TimeColumn } from '../molecules/TimeColumn';
import styles from './WeekCalender.module.scss';

const WeekCalender = () => {
  const { targetDate } = useTargetDateContext();
  const week = getWeek(targetDate.date(), targetDate.month(), targetDate.year());
  const today = getDay();

  return (
    <>
      <div className={styles.dateSlot}>
        {week.map((day) => (
          <div className={styles.dayWeekdayCell} key={day.date()}>
            <WeekdayText text={day.format('ddd')} weekDayNum={day.format('d')} size={'small'} />
            <div className={styles.dateBox}>
              <DayText
                day={day.date()}
                isToday={today.format('DD/MM/YYYY') === day.format('DD/MM/YYYY')}
                size={'large'}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.dateGrid}>
        <TimeSlot />
        <div className={styles.timeCellsWrapper}>
          {week.map((day) => (
            <TimeColumn key={day.format('D')}></TimeColumn>
          ))}
        </div>
      </div>
    </>
  );
};

export default WeekCalender;
