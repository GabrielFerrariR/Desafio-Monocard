import { createTheme } from '@mui/material/styles';

 const theme = createTheme({
  typography: {
    fontSize: 16,
    fontFamily: [
      'Press Start 2P',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#3B4CCA',
    },
    secondary: {
      light: '#0066ff',
      main: '#FF0000',
      contrastText: '#0A0800',
    },
    warning: {
      main: '#FFDE00',
    },
    background: {
      default: '#3B4CCA',
    }
  },
});

export default theme;