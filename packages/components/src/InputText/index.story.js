import { boolean, radios, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import InputText, { inputSizes } from './index.js';

const buildProps = (props = {}) => ({
  inputId: 'inputId',
  labelId: 'labelId',
  labelText: text('label', 'Label'),
  placeholder: text('placeholder', 'Placeholder'),
  inputSize: radios('size', inputSizes, inputSizes.medium),
  noAnimate: boolean('no animate', false),
  isValidated: boolean('is validated', false),
  isInvalid: boolean('is invalid', false),
  errorMessage: text('error message', 'Invalid data'),
  disabled: boolean('disabled', false),
  ...props,
});

storiesOf('inputs|standard text inputs', module)
  .addDecorator(withKnobs)
  .add('default', () => <InputText {...buildProps()} />)
  .add('validated', () => (
    <InputText
      {...buildProps({
        labelText: text('label', 'Validated'),
        isValidated: boolean('is validated', true),
      })}
      defaultValue="Astro Team"
    />
  ))
  .add('invalid', () => (
    <InputText
      {...buildProps({
        labelText: text('label', 'Invalid'),
        isInvalid: boolean('is invalid', true),
      })}
      defaultValue="XYZK2"
    />
  ))
  .add('disabled', () => (
    <InputText
      {...buildProps({
        disabled: boolean('disabled', true),
      })}
    />
  ))
  .add('without animation', () => (
    <InputText
      {...buildProps({
        noAnimate: boolean('no animate', true),
      })}
    />
  ))
  .add('large size', () => (
    <InputText
      {...buildProps({
        inputSize: radios('size', inputSizes, inputSizes.large),
      })}
    />
  ));
