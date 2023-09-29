'use client';

import React from 'react';
import { useCalenderContext } from '@/store/calender-theme';

const Month = React.lazy(() => import('../components/Month'));
const Week = React.lazy(() => import('../components/Week'));
const Day = React.lazy(() => import('../components/Day'));

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
