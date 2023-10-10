'use client';

import React from 'react';
import { useCalenderContext } from '@/store/calender-theme';
import { useTargetDateContext } from '@/store/target-date';
import { getDay, getWeek, getMonth } from '@/features/calender/utils/dayjs';

const MonthCalender = React.lazy(() => import('./organisms/MonthCalender'));
const WeekCalender = React.lazy(() => import('./organisms/WeekCalender'));
const DayCalender = React.lazy(() => import('./organisms/DayCalender'));

export default function CalenderSelector() {
  const { calenderTheme } = useCalenderContext();

  const { targetDate } = useTargetDateContext();
  const targetWeek = getWeek(targetDate.date(), targetDate.month(), targetDate.year());
  const targetMonth = getMonth(targetDate.date(), targetDate.month(), targetDate.year());
  const today = getDay();

  const componentMap: { [key: string]: JSX.Element } = {
    month: <MonthCalender targetMonth={targetMonth} today={today} />,
    week: <WeekCalender targetWeek={targetWeek} today={today} />,
    day: <DayCalender targetDate={targetDate} today={today} />,
  };

  const CalenderComponent = componentMap[calenderTheme];
  return CalenderComponent;
}
