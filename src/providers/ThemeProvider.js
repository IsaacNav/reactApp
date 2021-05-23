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

export const ThemeCustomProvider = ({ children }) => {
  const [theme, setTheme] = useState(createMuiTheme(whiteTheme));

  const setNewTheme = (props) => {
    const newTheme = createMuiTheme(props);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ setNewTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
