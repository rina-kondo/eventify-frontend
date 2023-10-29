import React from 'react';
import styles from './EventLabel.module.scss';
import { EventDataPropsType } from '@/features/calender/types';

type EventLabelProps = {
  calenderType: 'month' | 'week' | 'day';
  eventData?: EventDataPropsType;
  index?: number;
  eventDataArray: EventDataPropsType[];
};

export const EventLabel: React.FC<EventLabelProps> = ({ calenderType, eventData, index, eventDataArray }) => {
  if (!eventData || !index) return null;

  const calenderTypeClass = calenderType === 'month' ? styles.monthCalendar : styles.weekDayCalendar;
  const calculatedStyle = calculateLabelStyle(calenderType, eventData, eventDataArray, index);

  return (
    <div className={`${styles.eventLabel} ${calenderTypeClass}`} style={calculatedStyle}>
      {eventData.summary}
    </div>
  );
};

const calculateLabelStyle = (
  calenderType: 'month' | 'week' | 'day',
  eventData: EventDataPropsType,
  eventDataArray: EventDataPropsType[],
  index: number,
) => {
  const dtStart = new Date(eventData.dtStart);
  const dtEnd = new Date(eventData.dtEnd);
  const durationMinutes = (dtEnd.getTime() - dtStart.getTime()) / (1000 * 60);
  const eventLabelTop = dtStart.getMinutes() + dtStart.getHours() * 60;
  const minuteThreshold = 60;

  const forwardOverlappedCount = getOverlappedCount(eventDataArray, minuteThreshold);
  const backwardOverlappedCount = getOverlappedCount(eventDataArray.toReversed(), minuteThreshold);
  const isEventBetween = JudgeIsEventBetween(eventDataArray, minuteThreshold);

  // eventDataの開始時刻が1h以内に重なるイベントの数を数える
  function getOverlappedCount(eventDataArray: EventDataPropsType[], threshold: number) {
    const eventDataIndex = eventDataArray.findIndex((event) => event.id === eventData.id);
    let count = 0;
    for (let i = eventDataIndex; i > 0; i--) {
      const currentDtStart = new Date(eventDataArray[i].dtStart);
      const preDtStart = new Date(eventDataArray[i - 1].dtStart);

      if (!isMatchMonth(currentDtStart, preDtStart)) {
        break;
      }

      const currentEventLabelTop = minutesSinceMidnight(currentDtStart);
      const preEventLabelTop = minutesSinceMidnight(preDtStart);

      if (Math.abs(currentEventLabelTop - preEventLabelTop) < threshold) {
        count++;
      } else {
        break;
      }
    }
    return count;
  }

  function minutesSinceMidnight(date: Date) {
    return date.getMinutes() + date.getHours() * 60;
  }

  function isMatchMonth(date1: Date, date2: Date) {
    return date1.getMonth() === date2.getMonth();
  }

  // eventDataの開始時間がeventDataArrayのいずれかのイベントの開始時間と終了時間の間にあるかどうかを判定しbooleanを返す
  function JudgeIsEventBetween(eventDataArray: EventDataPropsType[], threshold: number) {
    for (let i = 0; i < eventDataArray.length; i++) {
      const thresholdDtStart = new Date(eventDataArray[i].dtStart);
      thresholdDtStart.setMinutes(thresholdDtStart.getMinutes() + threshold);
      const thresholdDtEnd = new Date(eventDataArray[i].dtEnd);

      if (thresholdDtStart <= dtStart && dtStart <= thresholdDtEnd) {
        return true;
      }
    }
    return false;
  }

  let width = 57;
  switch (calenderType) {
    case 'week':
      width = 51 / (backwardOverlappedCount + forwardOverlappedCount + 1) - (isEventBetween ? 5 : 0);
      break;
    case 'day':
      width = 370 / (backwardOverlappedCount + forwardOverlappedCount + 1) - (isEventBetween ? 5 : 0);
      break;
    case 'month':
      break;
  }

  const marginLeft = 1 + (forwardOverlappedCount > 0 ? width * forwardOverlappedCount : 0) + (isEventBetween ? 5 : 0);

  const labelStyle = {
    height: calenderType === 'month' ? '24px' : `${durationMinutes}px`,
    margin: calenderType === 'month' ? '3px 1px' : `${eventLabelTop + 1}px 0 0 ${marginLeft}px`,
    zIndex: calenderType === 'month' ? '1' : `${index}`,
    width: `${width}px`,
  };

  return labelStyle;
};
