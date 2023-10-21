'use client';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import customTheme from '@/infrastructure/mui/dayPickerTheme';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { ComponentProps } from 'react';
import { getDay } from '@/features/calender/utils/dayjs';

type P = ComponentProps<typeof MobileDatePicker>;

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Tokyo');
dayjs.locale('ja');

const today = getDay();

export const MuiDatePicker = (props: P) => {
  return (
    <ThemeProvider theme={customTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja" dateFormats={{ monthAndYear: 'YYYY年MM月' }}>
        <MobileDatePicker {...props} />
      </LocalizationProvider>
    </ThemeProvider>
  );
};
