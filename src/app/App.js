import React from 'react';
import { Provider } from 'react-redux';
import { ThemeCustomProvider } from '../providers/ThemeProvider';

import store from '../store';
import Router from '../router';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeCustomProvider>
        <Router />
      </ThemeCustomProvider>
    </Provider>
  );
};

export default App;
