import React from 'react';
import dayjs from 'dayjs';
import { DayText } from '../atoms/DayText';
import { DayCell } from '../atoms/DayCell';
import { WeekdayText } from '../atoms/WeekdayText';
import styles from './MonthCalender.module.scss';
import { dayjsFormats } from '@/dictionary/calender';

const MonthCalender = ({ targetMonth, today }: { targetMonth: dayjs.Dayjs[][]; today: dayjs.Dayjs }) => {
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
              </DayCell>
            ))}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default MonthCalender;
