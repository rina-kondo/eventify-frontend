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

  const calenderTypeClass = calenderType === 'month' ? styles.dayCalendar : styles.weekMonthCalendar;
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
  const eventDataIndex = eventDataArray.findIndex((event) => event.id === eventData.id);
  const minuteThreshold = 60;

  const backwardOverlappedCount = getOverlappedCount(eventDataIndex, eventDataArray, minuteThreshold);
  const forwardOverlappedCount = getOverlappedCount(eventDataIndex, eventDataArray.reverse(), minuteThreshold);
  const isEventBetween = JudgeIsEventBetween(dtStart, dtEnd, eventDataArray, minuteThreshold);

  // eventDataの開始時刻が1h以内に重なるイベントの数を数える
  function getOverlappedCount(eventDataIndex: number, eventDataArray: EventDataPropsType[], threshold: number) {
    let count = 0;
    for (let i = eventDataIndex; i > 0; i--) {
      const currentDtStart = new Date(eventDataArray[i].dtStart);
      const preDtStart = new Date(eventDataArray[i - 1].dtStart);

      if (currentDtStart.getDate() !== preDtStart.getDate()) {
        break;
      }

      const currentEventLabelTop = minutesSinceMidnight(currentDtStart);
      const preEventLabelTop = minutesSinceMidnight(preDtStart);

      if (currentEventLabelTop - preEventLabelTop < threshold) {
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

  // eventDataの開始時間がeventDataArrayのいずれかのイベントの開始時間と終了時間の間にあるかどうかを判定しbooleanを返す
  function JudgeIsEventBetween(dtStart: Date, dtEnd: Date, eventDataArray: EventDataPropsType[], threshold: number) {
    let low = 0;
    let high = eventDataArray.length - 1;
    let closestEventIndex = -1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const midDtStart = new Date(eventDataArray[mid].dtStart);

      if (midDtStart < dtStart) {
        low = mid + 1;
      } else if (midDtStart > dtStart) {
        high = mid - 1;
      } else {
        closestEventIndex = mid;
        break;
      }
    }

    if (closestEventIndex === -1) {
      return false;
    }

    const closestEvent = eventDataArray[closestEventIndex];
    const closestDtStart = new Date(closestEvent.dtStart);
    const closestDtEnd = new Date(closestEvent.dtEnd);

    return dtStart >= closestDtStart && dtEnd <= closestDtEnd;
  }

  const width = calenderType === 'month' ? 58 : 50 / (backwardOverlappedCount + forwardOverlappedCount + 1);
  const marginLeft = 1 + (forwardOverlappedCount > 0 ? width * forwardOverlappedCount : 0) + (isEventBetween ? 1 : 0);

  const labelStyle = {
    height: calenderType === 'month' ? '24px' : `${durationMinutes}px`,
    margin: calenderType === 'month' ? '3px 1px' : `${eventLabelTop + 1}px 0 0 ${marginLeft}px`,
    zIndex: calenderType === 'month' ? '1' : `${index}`,
    width: `${width}px`,
  };

  return labelStyle;
};
