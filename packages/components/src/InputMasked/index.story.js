import { storiesOf } from '@storybook/react';
import React from 'react';
import InputMasked, { maskTypes } from './index.js';

storiesOf('inputs|masked inputs', module)
  .add('cpf', () => (
    <InputMasked
      inputId="cpfMaskedInput"
      labelId="cpfMaskedLabel"
      labelText="CPF"
      maskType={maskTypes.cpf}
    />
  ))
  .add('currency', () => (
    <InputMasked
      inputId="currencyMaskedInput"
      labelId="currencyMaskedLabel"
      labelText="Currency"
      maskType={maskTypes.currency}
    />
  ))
  .add('date', () => (
    <InputMasked
      inputId="dateMaskedInput"
      labelId="dateMaskedLabel"
      labelText="Date"
      maskType={maskTypes.date}
    />
  ));
