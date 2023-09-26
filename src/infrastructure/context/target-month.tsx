'use client';

import { createContext, useContext, useState } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Tokyo');
const today = dayjs();

type TargetMonthContextType = {
  targetMonth: number;
  setTargetMonth: (targetMonth: number) => void;
};

const TargetMonthContext = createContext<TargetMonthContextType | undefined>(undefined);

export const TargetMonthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [targetMonth, setTargetMonth] = useState(today.month());

  return <TargetMonthContext.Provider value={{ targetMonth, setTargetMonth }}>{children}</TargetMonthContext.Provider>;
};

export const useTargetMonthContext = (): TargetMonthContextType => {
  const context = useContext(TargetMonthContext);
  if (context === undefined) {
    throw new Error('useTargetMonthContext must be used within a TargetMonthContextProvider');
  }
  return context;
};
