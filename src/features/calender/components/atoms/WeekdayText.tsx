import styles from './WeekDayText.module.scss';

type WeekdayProps = {
  text: string;
  weekDayNum?: string;
  size?: 'small' | 'middle';
};

export const WeekdayText = ({ text, weekDayNum, size }: WeekdayProps) => {
  const sizeClass = size ? styles[size] : styles.middle;
  const weekdayClass = weekDayNum === '0' ? styles.sunday : weekDayNum === '6' ? styles.saturday : styles.ordinaryDays;

  return <div className={`${styles.weekday} ${weekdayClass} ${sizeClass}`}>{text}</div>;
};
