import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import InputControl from '../InputControl';
import { inputSizes } from '../InputText';

const InputControlSample = ({ ...props }) => {
  const [value, setValue] = useState(0);
  const step = 100;
  const incrementLabel = 'increment';
  const decrementLabel = 'decrement';

  const handleValue = step => setValue(isNaN(value) ? 0 : parseInt(value, 10) + step);

  return (
    <InputControl
      inputId="controlInputId"
      labelId="controlInputLabel"
      labelText="Control input"
      onIncrement={() => handleValue(+step)}
      onDecrement={() => handleValue(-step)}
      buttonProps={{
        incrementButtonProps: {
          'aria-label': incrementLabel,
          title: incrementLabel,
        },
        decrementButtonProps: {
          'aria-label': decrementLabel,
          title: decrementLabel,
        },
      }}
      onChange={event => setValue(event.target.value)}
      thousandSeparator=""
      placeholder="0"
      decimalScale={0}
      value={value}
      {...props}
    />
  );
};

storiesOf('inputs|control inputs', module)
  .add('default', () => <InputControlSample />)
  .add('validated', () => <InputControlSample isValidated />)
  .add('invalid', () => <InputControlSample isInvalid errorMessage="Invalid data" />)
  .add('disabled', () => <InputControlSample disabled={true} />)
  .add('large', () => <InputControlSample inputSize={inputSizes.large} />);
