import React from 'react';
import { storiesOf } from '@storybook/react';
import InputText from './index.js';

storiesOf('InputText', module)
  .add('default', () => <InputText m={8} inputId="input0" labelId="label0" />)
  .add('validated', () => (
    <InputText
      m={8}
      inputId="input1"
      labelId="label1"
      labelText="Validated"
      defaultValue="Astro Team"
      isValidated
    />
  ))
  .add('invalid', () => (
    <InputText
      m={8}
      inputId="input2"
      labelId="label2"
      labelText="Invalid"
      defaultValue="Astro Team"
      errorMessage="Invalid data"
      isInvalid
    />
  ))
  .add('disabled', () => (
    <InputText m={8} inputId="input3" labelId="label3" labelText="Disabled" disabled />
  ));
