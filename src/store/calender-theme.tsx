'use client';

import { createContext, useContext, useState } from 'react';
import { getCookie } from '@/utility/clientCookie';
import dayjs from 'dayjs';

export type CalenderThemeType = 'month' | 'week' | 'day';

type calenderSettingType = {
  theme: CalenderThemeType;
  targetDate: dayjs.Dayjs;
  targetMonth: dayjs.Dayjs;
  targetYear: dayjs.Dayjs;
};

const calenderSettings: calenderSettingType = getCookie('calenderSettings');

type CalenderContextType = {
  calenderTheme: CalenderThemeType;
  setCalenderTheme: (calenderTheme: CalenderThemeType) => void;
};

const CalenderContext = createContext<CalenderContextType | undefined>(undefined);

export const CalenderContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [calenderTheme, setCalenderTheme] = useState<CalenderThemeType>(calenderSettings.theme as CalenderThemeType);

  return <CalenderContext.Provider value={{ calenderTheme, setCalenderTheme }}>{children}</CalenderContext.Provider>;
};

export const useCalenderContext = (): CalenderContextType => {
  const context = useContext(CalenderContext);
  if (context === undefined) {
    throw new Error('useCalenderContext must be used within a CalenderContextProvider');
  }
  return context;
};
