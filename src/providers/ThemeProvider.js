import { useState, createContext } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

export const whiteTheme = {
  palette: {
    primary: {
      main: '#212121',
      light: '#455A64'
    },
    secondary: {
      main: '#607D8B'
    }
  },
  logo: 'https://localhost:1337/public/logo.png',
  backgroundColor: '#ffffff'
};

export const blackTheme = {
  palette: {
    primary: {
      main: '#CFD8DC',
      light: '#FFFFFF'
    },
    secondary: {
      main: '#BDBDBD'
    }
  },
  backgroundColor: '#212121'
};

export const ThemeContext = createContext();

const generateTheme = (colorTheme) => {
  let theme = createMuiTheme(colorTheme);
  theme.colorPalette = {
    pink: '#FF4081',
    green: '#CDDC39',
    black: '#212121'
  };
  theme.typography.h1 = Object.assign(theme.typography.h1, {
    fontSize: '3rem',
    '@media (min-width:600px)': {
      fontSize: '3rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3.75rem'
    }
  });
  theme.typography.h2 = Object.assign(theme.typography.h2, {
    fontSize: '2.8rem',
    '@media (min-width:600px)': {
      fontSize: '2.8rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem'
    }
  });
  return theme;
};

export const ThemeCustomProvider = ({ children }) => {
  const [theme, setTheme] = useState(generateTheme(whiteTheme));

  const setNewTheme = (props) => {
    const newTheme = generateTheme(props);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ setNewTheme, currentTheme: theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
