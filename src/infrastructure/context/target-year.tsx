'use client';

import { createContext, useContext, useState } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Tokyo');
const today = dayjs();

type TargetYearContextType = {
  targetYear: number;
  setTargetYear: (targetYear: number) => void;
};

const TargetYearContext = createContext<TargetYearContextType | undefined>(undefined);

export const TargetYearContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [targetYear, setTargetYear] = useState(today.year());

  return <TargetYearContext.Provider value={{ targetYear, setTargetYear }}>{children}</TargetYearContext.Provider>;
};

export const useTargetYearContext = (): TargetYearContextType => {
  const context = useContext(TargetYearContext);
  if (context === undefined) {
    throw new Error('useTargetYearContext must be used within a TargetYearContextProvider');
  }
  return context;
};
