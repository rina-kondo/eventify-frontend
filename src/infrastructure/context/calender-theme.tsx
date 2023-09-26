'use client';

import { createContext, useContext, useState } from 'react';
import { getCookie } from '@/logics/clientCookie';

const calenderSettings = getCookie('calenderSettings');

export type CalenderThemeType = 'month' | 'week' | 'day';

type CalenderContextType = {
  calenderTheme: CalenderThemeType;
  setCalenderTheme: (calenderTheme: CalenderThemeType) => void;
};

const CalenderContext = createContext<CalenderContextType | undefined>(undefined);

export const CalenderContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [calenderTheme, setCalenderTheme] = useState<CalenderThemeType>(calenderSettings.theme);

  return <CalenderContext.Provider value={{ calenderTheme, setCalenderTheme }}>{children}</CalenderContext.Provider>;
};

export const useCalenderContext = (): CalenderContextType => {
  const context = useContext(CalenderContext);
  if (context === undefined) {
    throw new Error('useCalenderContext must be used within a CalenderContextProvider');
  }
  return context;
};
