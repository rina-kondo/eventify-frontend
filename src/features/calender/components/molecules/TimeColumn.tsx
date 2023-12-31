import styles from './TimeColumn.module.scss';
import { generateTimeList } from '@/features/calender/utils/generateTimeList';
import { TimeCell } from '../atoms/TimeCell';

export const TimeColumn = ({ children }: { children: React.ReactNode }) => {
  const TIME_LIST = generateTimeList();

  return (
    <>
      <div className={styles.timeColumn}>
        {TIME_LIST.map((time, index) => index < TIME_LIST.length - 1 && <TimeCell key={time.hour} />)}
        <div className={styles.eventLabel}>{children}</div>
        {/* {children} */}
      </div>
    </>
  );
};
