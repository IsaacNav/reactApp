import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Grid } from '@material-ui/core';

import ConvineProviders from '../providers/ConvineProviders';
import InputBase from '../components/InputBase';

const TextInputStory = (args) => (
  <InputBase label="Name" type="text" onChange={action('onChange')} />
);

const PasswordInput = (args) => (
  <InputBase
    label="Password"
    error
    helperText="Some important password"
    type="password"
    onChange={action('onChange')}
  />
);

export const Text = TextInputStory.bind({});
Text.storyName = 'Input de texto';

export const Password = PasswordInput.bind({});
Password.storyName = 'Password';

export default {
  title: 'Components/Base/Inputs',
  component: InputBase,
  decorators: [
    (Story) => (
      <ConvineProviders>
        <Story />
      </ConvineProviders>
    )
  ]
};
