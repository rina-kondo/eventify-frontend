import styles from './DayText.module.scss';

type DateNumberProps = {
  day: number;
  size?: 'middle' | 'large';
  isToday?: boolean;
  isGrayedOut?: boolean;
};

export const DayText = ({ day, size, isToday, isGrayedOut }: DateNumberProps) => {
  const sizeClass = size ? styles[size] : styles.middle;
  const displayClass = isToday ? styles.today : isGrayedOut ? styles.grayedOut : styles.ordinaryDays;

  return <div className={`${styles.dayText} ${displayClass}  ${sizeClass}`}>{day}</div>;
};
