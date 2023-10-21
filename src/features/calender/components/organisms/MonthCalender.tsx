import React, { Suspense } from 'react';
import dayjs from 'dayjs';
import { DayText } from '../atoms/DayText';
import { DayCell } from '../atoms/DayCell';
import { EventLabel } from '../atoms/EventLabel';
import { WeekdayText } from '../atoms/WeekdayText';
import styles from './MonthCalender.module.scss';
import { dayjsFormats } from '@/dictionary/calender';
import { EventDataPropsType } from '@/features/calender/types';

const MonthCalender = ({
  targetMonth,
  today,
  eventData,
}: {
  targetMonth: dayjs.Dayjs[][];
  today: dayjs.Dayjs;
  eventData?: EventDataPropsType[];
}) => {
  console.log(eventData);

  return (
    <>
      <div className={styles.weekdaySlot}>
        {targetMonth.map((week, weekIndex) => (
          <React.Fragment key={weekIndex}>
            {week.map((day, dayIndex) => (
              <React.Fragment key={dayIndex}>
                {weekIndex === 0 && (
                  <WeekdayText
                    text={day.format(dayjsFormats.weekdayShortText)}
                    weekDayNum={day.format(dayjsFormats.weekdayNum)}
                    size="middle"
                  />
                )}
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>

      <div className={styles.dateGrid}>
        {targetMonth.map((week, weekIndex) => (
          <React.Fragment key={weekIndex}>
            {week.map((day) => (
              <DayCell key={day.date()}>
                <DayText
                  day={day.date()}
                  isToday={today.format(dayjsFormats.dateHeader) === day.format(dayjsFormats.dateHeader)}
                  isGrayedOut={day.month() === today.month()}
                />
                <Suspense>
                  {eventData &&
                    eventData.map((event, index) => {
                      {
                        if (
                          day.format(dayjsFormats.dateHeader) === dayjs(event.dtStart).format(dayjsFormats.dateHeader)
                        ) {
                          return <EventLabel key={index} eventData={event} calenderType="month" />;
                        }
                      }
                    })}
                </Suspense>
              </DayCell>
            ))}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default MonthCalender;
