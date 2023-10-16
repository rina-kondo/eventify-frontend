import dayjs from 'dayjs';
import { DayText } from '../atoms/DayText';
import { WeekdayText } from '../atoms/WeekdayText';
import { TimeSlot } from '../molecules/TimeSlot';
import { TimeColumn } from '../molecules/TimeColumn';
import styles from './WeekCalender.module.scss';
import { dayjsFormats } from '@/dictionary/calender';

const WeekCalender = ({ targetWeek, today }: { targetWeek: dayjs.Dayjs[]; today: dayjs.Dayjs }) => {
  return (
    <>
      <div className={styles.dateSlot}>
        {targetWeek.map((day) => (
          <div className={styles.dayWeekdayCell} key={day.date()}>
            <WeekdayText
              text={day.format(dayjsFormats.weekdayShortText)}
              weekDayNum={day.format(dayjsFormats.weekdayNum)}
              size={'small'}
            />
            <div className={styles.dateBox}>
              <DayText
                day={day.date()}
                isToday={today.format(dayjsFormats.dateHeader) === day.format(dayjsFormats.dateHeader)}
                size={'large'}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.dateGrid}>
        <TimeSlot />
        <div className={styles.timeCellsWrapper}>
          {targetWeek.map((day) => (
            <TimeColumn key={day.format(dayjsFormats.day)} />
          ))}
        </div>
      </div>
    </>
  );
};

export default WeekCalender;
