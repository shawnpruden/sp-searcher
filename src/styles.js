import { deepPurple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: deepPurple,
    background: {
      default: '#F3F1F5',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export const navBar = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 3,
};
