import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B5E20',
      light: '#4CAF50',
      dark: '#0D3311'
    },
    secondary: {
      main: '#795548',
      light: '#A1887F',
      dark: '#4B2C20'
    },
    info: {
      main: '#1976D2',
      light: '#64B5F6',
      dark: '#0D47A1'
    },
    warning: {
      main: '#E65100',
      light: '#FF9800',
      dark: '#BF360C'
    },
    success: {
      main: '#6A1B9A',
      light: '#9C27B0',
      dark: '#38006B'
    },
    background: {
      default: '#FFF8E1',
      paper: '#FFFFFF'
    },
    text: {
      primary: '#2E2E2E',
      secondary: '#595959'
    }
  },
  typography: {
    fontFamily: [
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      color: '#1B5E20'
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      color: '#1B5E20'
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.4
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.4
    },
    button: {
      textTransform: 'none',
      fontWeight: 500
    }
  },
  shape: {
    borderRadius: 12
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFF8E1',
          color: '#1B5E20'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '8px 24px',
          fontSize: '1rem'
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px'
        }
      }
    }
  }
});

export default theme; 