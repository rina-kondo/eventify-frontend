import { Suspense } from 'react';
import dayjs from 'dayjs';
import { DayText } from '../atoms/DayText';
import { WeekdayText } from '../atoms/WeekdayText';
import { EventLabel } from '../atoms/EventLabel';
import { TimeSlot } from '../molecules/TimeSlot';
import { TimeColumn } from '../molecules/TimeColumn';
import styles from './WeekCalender.module.scss';
import { dayjsFormats } from '@/dictionary/calender';
import { EventDataPropsType } from '@/features/calender/types';

const WeekCalender = ({
  targetWeek,
  today,
  eventData,
}: {
  targetWeek: dayjs.Dayjs[];
  today: dayjs.Dayjs;
  eventData?: EventDataPropsType[];
}) => {
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
            <TimeColumn key={day.format(dayjsFormats.day)}>
              <Suspense>
                {eventData &&
                  eventData.map((event, index) => {
                    {
                      if (
                        day.format(dayjsFormats.dateHeader) === dayjs(event.dtStart).format(dayjsFormats.dateHeader)
                      ) {
                        return (
                          <EventLabel
                            key={index}
                            index={index}
                            eventDataArray={eventData}
                            eventData={event}
                            calenderType="week"
                          />
                        );
                      }
                    }
                  })}
              </Suspense>
            </TimeColumn>
          ))}
        </div>
      </div>
    </>
  );
};

export default WeekCalender;
