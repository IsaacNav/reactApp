import React from 'react';

import ConvineProviders from '../providers/ConvineProviders';
import HeaderBar from '../components/HeaderBar';

export { HeaderBar as header };

export default {
  title: 'components/Base/HeaderBar',
  component: HeaderBar,
  decorators: [
    (Story) => (
      <ConvineProviders>
        <Story />
      </ConvineProviders>
    )
  ]
};
