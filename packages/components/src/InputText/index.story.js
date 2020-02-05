import React from 'react';
import { storiesOf } from '@storybook/react';
import InputText from './index.js';

storiesOf('InputText', module)
  .add('default', () => <InputText m={8} />)
  .add('validated', () => (
    <InputText m={8} isValidated labelText="Validated" defaultValue="Astro Team" />
  ))
  .add('invalid', () => (
    <InputText
      m={8}
      isInvalid
      labelText="Invalid"
      defaultValue="Astro Team"
      errorMessage="Invalid data"
    />
  ))
  .add('disabled', () => <InputText m={8} labelText="Disabled" disabled />);
