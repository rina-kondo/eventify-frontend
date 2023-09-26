import dayjs from 'dayjs';
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
  const thisMonth = dayjs().month();
  const colorClass = size ? styles[size] : '';

  const todayClass = () => {
    return day.format('DDMMYY') === dayjs().format('DDMMYY') ? styles.today : null;
  };

  const notThisMonthClass = () => {
    return day.month() === thisMonth ? null : styles.notThisMonth;
  };

  return (
    <>
      <div className={`${styles.dateNumber} ${todayClass()} ${notThisMonthClass()} ${colorClass}`}>
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
