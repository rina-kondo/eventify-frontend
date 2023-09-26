import { useTargetDayContext } from '@/infrastructure/context/target-day';
import { useTargetMonthContext } from '@/infrastructure/context/target-month';
import { useTargetYearContext } from '@/infrastructure/context/target-year';
import { useCalenderContext } from '@/infrastructure/context/calender-theme';
import { getDay } from '../logics/dayjs';
import { Dayjs } from 'dayjs';

export function useHandleTargetDate() {
  const { targetMonth, setTargetMonth } = useTargetMonthContext();
  const { targetDay, setTargetDay } = useTargetDayContext();
  const { targetYear, setTargetYear } = useTargetYearContext();
  const { calenderTheme } = useCalenderContext();

  const handleTargetDate = (value: number) => () => {
    let resetTargetDate: Dayjs;
    switch (calenderTheme) {
      case 'month':
        resetTargetDate = getDay(targetDay, targetMonth + value, targetYear);
        break;
      case 'week':
        resetTargetDate = getDay(targetDay + value * 7, targetMonth, targetYear);
        break;
      case 'day':
        resetTargetDate = getDay(targetDay + value, targetMonth + value, targetYear);
        break;
    }

    setTargetMonth(resetTargetDate.month());
    setTargetDay(resetTargetDate.date());
    setTargetYear(resetTargetDate.year());
  };

  return { handleTargetDate };
}

export function useSetTargetToday() {
  const { setTargetMonth } = useTargetMonthContext();
  const { setTargetDay } = useTargetDayContext();
  const { setTargetYear } = useTargetYearContext();

  const handleSetTargetToday = () => {
    const today = getDay();
    setTargetMonth(today.month());
    setTargetDay(today.date());
    setTargetYear(today.year());
  };

  return { handleSetTargetToday };
}