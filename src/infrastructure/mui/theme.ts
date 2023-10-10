import { createTheme } from '@mui/material/styles';
import { jaJP as coreJaJP } from '@mui/material/locale';
import { jaJP } from '@mui/x-date-pickers/locales';

import type {} from '@mui/x-date-pickers/themeAugmentation';

const theme = createTheme(
  {
    palette: {
      mode: 'light',
      primary: {
        main: '#00adb5',
        contrastText: '#fffffe',
      },
      secondary: {
        main: '#2b2c34',
        contrastText: '#fffffe',
      },
      text: {
        primary: 'rgba(43,44,52,1)',
      },
      error: {
        main: '#f87474',
        contrastText: '#fffffe',
      },
      warning: {
        main: '#ffb562',
        contrastText: '#fffffe',
      },
      info: {
        main: '#3ab0ff',
        contrastText: '#fffffe',
      },
      success: {
        main: '#4caf50',
        contrastText: '#fffffe',
      },
      divider: 'rgba(255,255,255,0)',
      background: {
        default: '#fffffe',
      },
    },
    typography: {
      fontFamily: ['Inter', 'Noto Sans JP', 'YuGothic', 'メイリオ', 'Meiryo', 'Helvetica', 'Arial', 'sans-serif'].join(
        ',',
      ),
      fontSize: 14,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: 17,
          },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            fontSize: 17,
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            fontSize: 17,
          },
        },
      },
    },
  },
  jaJP,
  coreJaJP,
);

export default theme;
