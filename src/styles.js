import { deepPurple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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
  },
});

export { theme };
