import { Suspense } from 'react';
import dayjs from 'dayjs';
import { EventLabel } from '../atoms/EventLabel';
import { TimeSlot } from '../molecules/TimeSlot';
import { TimeColumn } from '../molecules/TimeColumn';
import { DayText } from '../atoms/DayText';
import { WeekdayText } from '../atoms/WeekdayText';
import styles from './DayCalender.module.scss';
import { dayjsFormats } from '@/dictionary/calender';
import { EventDataPropsType } from '@/features/calender/types';

const DayCalender = ({
  targetDate,
  today,
  eventData,
}: {
  targetDate: dayjs.Dayjs;
  today: dayjs.Dayjs;
  eventData?: EventDataPropsType[];
}) => {
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
          <TimeColumn>
            <Suspense>
              {eventData &&
                eventData.map((event, index) => {
                  {
                    if (
                      targetDate.format(dayjsFormats.dateHeader) ===
                      dayjs(event.dtStart).format(dayjsFormats.dateHeader)
                    ) {
                      return (
                        <EventLabel
                          key={index}
                          index={index}
                          eventDataArray={eventData}
                          eventData={event}
                          calenderType="day"
                        />
                      );
                    }
                  }
                })}
            </Suspense>
          </TimeColumn>
        </div>
      </div>
    </>
  );
};

export default DayCalender;
