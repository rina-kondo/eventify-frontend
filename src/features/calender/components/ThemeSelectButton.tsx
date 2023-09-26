'use client';

import { useCalenderContext } from '@/infrastructure/context/calender-theme';
import { useHandleCalenderTheme } from '../hooks/handleCalenderTheme';
import { SelectChangeEvent } from '@mui/material';
import { CustomSelectButton, CustomMenuItem } from '@/components/mui/SelectButton';

export default function ThemeSelectButton() {
  const { calenderTheme } = useCalenderContext();
  const { handleCalenderTheme } = useHandleCalenderTheme();

  const toggleButtonProps = [
    { value: 'day', text: '日' },
    { value: 'week', text: '週' },
    { value: 'month', text: '月' },
  ];

  return (
    <CustomSelectButton value={calenderTheme} onChange={(event) => handleCalenderTheme(event as SelectChangeEvent)}>
      {toggleButtonProps.map((toggleButtonProp, index) => (
        <CustomMenuItem key={index} value={toggleButtonProp.value}>
          {toggleButtonProp.text}
        </CustomMenuItem>
      ))}
    </CustomSelectButton>
  );
}
