'use client';

import React from 'react';
import { useCalenderContext } from '@/store/calender-theme';

const Month = React.lazy(() => import('./MonthCalender'));
const Week = React.lazy(() => import('./WeekCalender'));
const Day = React.lazy(() => import('./DayCalender'));

export default function CalenderSelector() {
  const { calenderTheme } = useCalenderContext();

  const componentMap: { [key: string]: JSX.Element } = {
    month: <Month />,
    week: <Week />,
    day: <Day />,
  };

  const CalenderComponent = componentMap[calenderTheme];
  return CalenderComponent;
}
