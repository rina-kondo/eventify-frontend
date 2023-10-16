'use client';

import { createContext, useContext, useState } from 'react';
import { getCookie } from '@/utility/clientCookie';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Tokyo');

export type CalenderThemeType = 'month' | 'week' | 'day';

const calenderSettings: CalenderThemeType = getCookie('calenderSettings')
  ? getCookie('calenderSettings').theme
  : 'month';

type CalenderContextType = {
  calenderTheme: CalenderThemeType;
  setCalenderTheme: (calenderTheme: CalenderThemeType) => void;
};

const CalenderContext = createContext<CalenderContextType | undefined>(undefined);

export const CalenderContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [calenderTheme, setCalenderTheme] = useState<CalenderThemeType>(calenderSettings);

  return <CalenderContext.Provider value={{ calenderTheme, setCalenderTheme }}>{children}</CalenderContext.Provider>;
};

export const useCalenderContext = (): CalenderContextType => {
  const context = useContext(CalenderContext);
  if (context === undefined) {
    throw new Error('useCalenderContext must be used within a CalenderContextProvider');
  }
  return context;
};
