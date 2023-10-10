import dayjs from 'dayjs';
import { TimeSlot } from '../molecules/TimeSlot';
import { TimeColumn } from '../molecules/TimeColumn';
import { DayText } from '../atoms/DayText';
import { WeekdayText } from '../atoms/WeekdayText';
import styles from './DayCalender.module.scss';
import { dayjsFormats } from '@/dictionary/calender';

const DayCalender = ({ targetDate, today }: { targetDate: dayjs.Dayjs; today: dayjs.Dayjs }) => {
  return (
    <>
      <div className={styles.dateSlot}>
        <WeekdayText
          text={targetDate.format(dayjsFormats.weekdayShortText)}
          weekDayNum={targetDate.format(dayjsFormats.weekdayNum)}
          size={'small'}
        />
        <DayText
          day={targetDate.date()}
          isToday={today.format(dayjsFormats.dateHeader) === targetDate.format(dayjsFormats.dateHeader)}
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
