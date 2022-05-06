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
  },
});

export const container = {
  background: '#FBF6F0',
  margin: '2rem 0',
  padding: '0 16px 16px 16px',
  border: '2px solid #D9D7F1',
  borderRadius: '5px',
};
