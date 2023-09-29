'use client';

import { createContext, useContext, useState } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Tokyo');
const today = dayjs();

type TargetDayContextType = {
  targetDay: number;
  setTargetDay: (targetDay: number) => void;
};

const TargetDayContext = createContext<TargetDayContextType | undefined>(undefined);

export const TargetDayContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [targetDay, setTargetDay] = useState(today.date());

  return <TargetDayContext.Provider value={{ targetDay, setTargetDay }}>{children}</TargetDayContext.Provider>;
};

export const useTargetDayContext = (): TargetDayContextType => {
  const context = useContext(TargetDayContext);
  if (context === undefined) {
    throw new Error('useTargetDayContext must be used within a TargetDayContextProvider');
  }
  return context;
};
