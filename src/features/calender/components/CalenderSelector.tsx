'use client';

import React from 'react';
import { useCalenderContext } from '@/store/calender-theme';
import { useTargetDateContext } from '@/store/target-date';
import { getDay, getWeek, getMonth } from '@/features/calender/utils/dayjs';

const Month = React.lazy(() => import('./organisms/MonthCalender'));
const Week = React.lazy(() => import('./organisms/WeekCalender'));
const Day = React.lazy(() => import('./organisms/DayCalender'));

export default function CalenderSelector() {
  const { calenderTheme } = useCalenderContext();

  const { targetDate } = useTargetDateContext();
  const targetWeek = getWeek(targetDate.date(), targetDate.month(), targetDate.year());
  const targetMonth = getMonth(targetDate.date(), targetDate.month(), targetDate.year());
  const today = getDay();

  const componentMap: { [key: string]: JSX.Element } = {
    month: <Month targetMonth={targetMonth} today={today} />,
    week: <Week targetWeek={targetWeek} today={today} />,
    day: <Day targetDate={targetDate} today={today} />,
  };

  const CalenderComponent = componentMap[calenderTheme];
  return CalenderComponent;
}
