import React from 'react';

import { ThemeCustomProvider } from './ThemeProvider';

const providersConfig = [ThemeCustomProvider];

const convineProviders = (providers) => {
  return ({ children }) => {
    return providers.reduceRight(
      (acc, Provider) => <Provider>{acc}</Provider>,
      children
    );
  };
};

export default convineProviders(providersConfig);
