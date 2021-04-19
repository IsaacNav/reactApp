import { createContext } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = {
  palette: {
    primary: {
      main: '#2196f3',
      light: '#2196f3'
    },
    secondary: {
      main: '#ffff'
    }
  },
  logo: 'https://localhost:1337/public/logo.png'
};

export const theme = createMuiTheme({ ...defaultTheme });

export const ThemeContext = createContext({
  theme
});
