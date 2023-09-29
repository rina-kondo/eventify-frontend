import { useTargetDateContext } from '@/store/target-date';
import { getDay } from '@/features/calender/utils/dayjs';
import { TimeSlot } from '../molecules/TimeSlot';
import { TimeColumn } from '../molecules/TimeColumn';
import { DayText } from '../atoms/DayText';
import { WeekdayText } from '../atoms/WeekdayText';
import styles from './DayCalender.module.scss';

const DayCalender = () => {
  const { targetDate } = useTargetDateContext();
  const today = getDay();

  return (
    <>
      <div className={styles.dateSlot}>
        <WeekdayText text={targetDate.format('ddd')} weekDayNum={targetDate.format('d')} size={'small'} />
        <DayText
          day={targetDate.date()}
          isToday={today.format('DD/MM/YYYY') === targetDate.format('DD/MM/YYYY')}
          size={'large'}
        />
      </div>
      <div className={styles.dateGrid}>
        <TimeSlot />
        <div className={styles.timeCellsWrapper}>
          <TimeColumn />
        </div>
      </div>
    </>
  );
};

export default DayCalender;
