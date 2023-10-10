'use client';
import { createContext, useContext, useState } from 'react';
import dayjs from 'dayjs';
import { getDay } from '@/features/calender/utils/dayjs';

const today = getDay();

type TargetDateContextType = {
  targetDate: dayjs.Dayjs;
  setTargetDate: (targetDate: dayjs.Dayjs) => void;
};

const TargetDateContext = createContext<TargetDateContextType | undefined>(undefined);

export const TargetDateContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [targetDate, setTargetDate] = useState(today);

  return <TargetDateContext.Provider value={{ targetDate, setTargetDate }}>{children}</TargetDateContext.Provider>;
};

export const useTargetDateContext = (): TargetDateContextType => {
  const context = useContext(TargetDateContext);
  if (context === undefined) {
    throw new Error('useTargetDateContext must be used within a TargetDateContextProvider');
  }
  return context;
};
