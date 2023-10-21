import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import customTheme from '@/infrastructure/mui/dayPickerTheme';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { ComponentProps } from 'react';

type P = ComponentProps<typeof MobileTimePicker>;

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Tokyo');
dayjs.locale('ja');

export const MuiTimePicker = (props: P) => {
  return (
    <ThemeProvider theme={customTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja" dateFormats={{ monthAndYear: 'YYYY年MM月' }}>
        <MobileTimePicker {...props} />
      </LocalizationProvider>
    </ThemeProvider>
  );
};
