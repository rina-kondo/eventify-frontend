'use client';

import { useCalenderContext } from '@/store/calender-theme';
import { useHandleCalenderTheme } from '../hooks/handleCalenderTheme';
import { SelectChangeEvent } from '@mui/material';
import { MuiSelectButton, MuiMenuItem } from '@/components/mui/SelectButton';

export const ThemeSelectButton = () => {
  const { calenderTheme } = useCalenderContext();
  const { handleCalenderTheme } = useHandleCalenderTheme();

  const toggleButtonProps = [
    { value: 'day', text: '日' },
    { value: 'week', text: '週' },
    { value: 'month', text: '月' },
  ];

  return (
    <MuiSelectButton value={calenderTheme} onChange={(event) => handleCalenderTheme(event as SelectChangeEvent)}>
      {toggleButtonProps.map((toggleButtonProp, index) => (
        <MuiMenuItem key={index} value={toggleButtonProp.value}>
          {toggleButtonProp.text}
        </MuiMenuItem>
      ))}
    </MuiSelectButton>
  );
};
