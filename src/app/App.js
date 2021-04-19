import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

import store from '../store';
import { ThemeContext } from '../context/ThemeContext';
import useTheme from '../hooks/useTheme';

import Router from '../router';

const App = () => {
  const [theme] = useTheme();

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={theme}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </ThemeContext.Provider>
    </Provider>
  );
};

export default App;
