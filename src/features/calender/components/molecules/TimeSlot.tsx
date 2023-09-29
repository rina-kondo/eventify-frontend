import styles from './TimeSlot.module.scss';
import { generateTimeList } from '@/features/calender/utils/generateTimeList';

export const TimeSlot = () => {
  const TIME_LIST = generateTimeList();

  return (
    <div className={styles.timeSlot}>
      {TIME_LIST.map((time) => (
        <div className={styles.timeText} key={time.hour}>
          {time.text}
        </div>
      ))}
    </div>
  );
};
