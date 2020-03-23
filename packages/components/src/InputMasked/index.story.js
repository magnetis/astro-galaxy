import { storiesOf } from '@storybook/react';
import React from 'react';
import InputMasked, { maskTypes } from './index.js';

storiesOf('InputMasked', module)
  .add('CPF', () => (
    <InputMasked
      inputId="cpfMaskedInput"
      labelId="cpfMaskedLabel"
      labelText="CPF"
      maskType={maskTypes.cpf}
    />
  ))
  .add('Currency', () => (
    <InputMasked
      inputId="currencyMaskedInput"
      labelId="currencyMaskedLabel"
      labelText="Currency"
      maskType={maskTypes.currency}
    />
  ))
  .add('Date', () => (
    <InputMasked
      inputId="dateMaskedInput"
      labelId="dateMaskedLabel"
      labelText="Date"
      maskType={maskTypes.date}
    />
  ));
