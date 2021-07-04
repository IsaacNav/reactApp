import React from 'react';
import { Provider } from 'react-redux';
import { ThemeCustomProvider } from './providers/ThemeProvider';

import store from './store';

export const ProviderTest = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeCustomProvider>{children}</ThemeCustomProvider>
    </Provider>
  );
};

export const addOpacityColor = (color, opacity = 1) => {
  const opacityHex = Math.round(opacity * 255).toString(16);
  return `${color}${opacityHex}`;
};
