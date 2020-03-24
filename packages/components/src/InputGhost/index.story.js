import { theme } from '@magnetis/astro-galaxy-core';
import { storiesOf } from '@storybook/react';
import React from 'react';
import InputGhost from './index.js';

storiesOf('InputGhost', module)
  .addParameters({
    backgrounds: [
      { name: 'moon 900', value: theme.colors.moon900, default: true },
      { name: 'uranus 500', value: theme.colors.uranus500, default: true },
    ],
  })
  .add('default', () => <InputGhost inputId="input0" labelId="label0" />)
  .add('validated', () => (
    <InputGhost
      inputId="input1"
      labelId="label1"
      labelText="Validated"
      defaultValue="Astro Team"
      isValidated
    />
  ))
  .add('invalid', () => (
    <InputGhost
      inputId="input2"
      labelId="label2"
      labelText="Invalid"
      defaultValue="Astro Team"
      errorMessage="Invalid data"
      isInvalid
    />
  ))
  .add('disabled', () => (
    <InputGhost inputId="input3" labelId="label3" labelText="Disabled" disabled />
  ));
