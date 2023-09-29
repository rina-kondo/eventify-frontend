import { useCalenderContext, CalenderThemeType } from '@/store/calender-theme';
import { getCookie, setCookie } from '@/utility/clientCookie';
import { SelectChangeEvent } from '@mui/material';

export function useHandleCalenderTheme() {
  const { setCalenderTheme } = useCalenderContext();
  const calenderSettings = getCookie('calenderSettings');

  const handleCalenderTheme = (event: SelectChangeEvent) => {
    const selectedCalenderType = event.target.value as CalenderThemeType;
    // set context state
    setCalenderTheme(selectedCalenderType);
    // set cookie
    calenderSettings.theme = selectedCalenderType;
    setCookie('calenderSettings', calenderSettings);
  };

  return { handleCalenderTheme };
}
