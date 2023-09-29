import { useTargetDateContext } from '@/store/target-date';
import { useCalenderContext } from '@/store/calender-theme';
import { getDay } from '../utils/dayjs';
import { Dayjs } from 'dayjs';

export function useHandleTargetDate() {
  const { targetDate, setTargetDate } = useTargetDateContext();
  const { calenderTheme } = useCalenderContext();

  const handleTargetDate = (value: number) => () => {
    let resetTargetDate: Dayjs;
    switch (calenderTheme) {
      case 'month':
        resetTargetDate = getDay(targetDate.date(), targetDate.month() + value, targetDate.year());
        break;
      case 'week':
        resetTargetDate = getDay(targetDate.date() + value * 7, targetDate.month(), targetDate.year());
        break;
      case 'day':
        resetTargetDate = getDay(targetDate.date() + value, targetDate.month(), targetDate.year());
        break;
    }

    setTargetDate(resetTargetDate);
    console.log(targetDate);
  };

  return { handleTargetDate };
}

export function useSetTargetToday() {
  const { setTargetDate } = useTargetDateContext();

  const handleSetTargetToday = () => {
    const today = getDay();
    setTargetDate(today);
  };

  return { handleSetTargetToday };
}
