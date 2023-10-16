import dayjs from 'dayjs';
import inst, { PluginFunc, UnitType, ManipulateType } from 'dayjs';
import 'dayjs/locale/ja';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Tokyo');
dayjs.locale('ja');

export function getMonth(day = dayjs().date(), month = dayjs().month(), year = dayjs().year()) {
  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfMonth;
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}

export function getWeek(day = dayjs().date(), month = dayjs().month(), year = dayjs().year()) {
  const targetDate = dayjs(new Date(year, month, day));
  const startOfWeek = targetDate.startOf('week');
  const daysMatrix = new Array(7).fill(null).map((_, index) => {
    return startOfWeek.add(index, 'day');
  });
  return daysMatrix;
}

export function getDay(day = dayjs().date(), month = dayjs().month(), year = dayjs().year()) {
  const targetDate = dayjs(new Date(year, month, day));
  return targetDate;
}

export function getNow() {
  return dayjs();
}

export function getRoundDownTime() {
  const dateTime = dayjs();
  const roundedDateTime = dayjs(dateTime).minute(0).second(0).millisecond(0);
  return roundedDateTime;
}
