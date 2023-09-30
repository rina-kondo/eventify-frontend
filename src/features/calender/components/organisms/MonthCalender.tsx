import React from 'react';
import dayjs from 'dayjs';
import { DayText } from '../atoms/DayText';
import { DayCell } from '../atoms/DayCell';
import { WeekdayText } from '../atoms/WeekdayText';
import styles from './MonthCalender.module.scss';

const MonthCalender = ({ targetMonth, today }: { targetMonth: dayjs.Dayjs[][]; today: dayjs.Dayjs }) => {
  return (
    <>
      <div className={styles.weekdaySlot}>
        {targetMonth.map((week, weekIndex) => (
          <React.Fragment key={weekIndex}>
            {week.map((day, dayIndex) => (
              <React.Fragment key={dayIndex}>
                {weekIndex === 0 && <WeekdayText text={day.format('dd')} weekDayNum={day.format('d')} size="middle" />}
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
                  isToday={today.format('DD/MM/YYYY') === day.format('DD/MM/YYYY')}
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
