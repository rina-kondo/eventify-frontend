import { useTargetMonthContext } from '@/infrastructure/context/target-month';
import dayjs from 'dayjs';
import { getDay } from '@/features/calender/logics/dayjs';
import styles from './DayText.module.scss';

type DateNumberProps = {
  day: dayjs.Dayjs;
  index?: number;
  size?: 'middle' | 'large';
};

type WeekdayProps = {
  weekday: string;
  index?: number;
  size?: 'small' | 'middle';
};

export function DateNumber({ day, index, size }: DateNumberProps) {
  const { targetMonth } = useTargetMonthContext();
  const thisMonth = getDay().month();
  const colorClass = size ? styles[size] : '';

  const todayClass = () => {
    return day.format('DDMMYY') === getDay().format('DDMMYY') ? styles.today : null;
  };

  const notTargetMonthClass = () => {
    return day.month() === targetMonth ? null : styles.notThisMonth;
  };

  return (
    <>
      <div className={`${styles.dateNumber} ${todayClass()} ${notTargetMonthClass()} ${colorClass}`}>
        {day.format('D')}
      </div>
    </>
  );
}

export function Weekday({ weekday, index, size }: WeekdayProps) {
  const colorClass = size ? styles[size] : '';

  const weekdayClass = () => {
    return index === 0 ? styles.sunday : index === 6 ? styles.saturday : null;
  };

  return (
    <>
      <div className={`${styles.weekday} ${weekdayClass()} ${colorClass}`}>{weekday}</div>
    </>
  );
}
