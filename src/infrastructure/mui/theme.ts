import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00adb5',
      contrastText: '#f9f2ed',
    },
    secondary: {
      main: '#2b2c34',
      contrastText: '#f9f2ed',
    },
    text: {
      primary: 'rgba(43,44,52,1)',
    },
    error: {
      main: '#f87474',
      contrastText: '#f9f2ed',
    },
    warning: {
      main: '#ffb562',
      contrastText: '#f9f2ed',
    },
    info: {
      main: '#3ab0ff',
      contrastText: '#f9f2ed',
    },
    success: {
      main: '#4caf50',
      contrastText: '#f9f2ed',
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
    fontSize: 13,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 17,
        },
      },
    },
  },
});

export default theme;
