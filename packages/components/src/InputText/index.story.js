import { storiesOf } from '@storybook/react';
import React from 'react';
import InputText from './index.js';

storiesOf('InputText', module)
  .add('default', () => <InputText inputId="input0" labelId="label0" />)
  .add('validated', () => (
    <InputText
      inputId="input1"
      labelId="label1"
      labelText="Validated"
      defaultValue="Astro Team"
      isValidated
    />
  ))
  .add('invalid', () => (
    <InputText
      inputId="input2"
      labelId="label2"
      labelText="Invalid"
      defaultValue="Astro Team"
      errorMessage="Invalid data"
      isInvalid
    />
  ))
  .add('disabled', () => (
    <InputText inputId="input3" labelId="label3" labelText="Disabled" disabled />
  ))
  .add('without animation', () => (
    <InputText inputId="input4" labelId="label4" placeholder="Placeholder" noAnimate />
  ));
