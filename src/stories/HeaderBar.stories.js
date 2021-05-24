import React from 'react';

import ConvineProviders from '../providers/ConvineProviders';
import HeaderBar from '../components/HeaderBar';

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <ConvineProviders>
    <HeaderBar {...args} />
  </ConvineProviders>
);

export const Primary = Template;

export default {
  title: 'Components/HeaderBar',
  component: HeaderBar
};
