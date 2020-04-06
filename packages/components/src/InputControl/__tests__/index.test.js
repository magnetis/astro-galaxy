import React from 'react';
import InputControl from '../';

describe('InputControl', () => {
  it('renders correctly', () => {
    const json = rendererCreateWithTheme(
      <InputControl
        inputId="controlInputId"
        labelId="controlInputLabel"
        onIncrement={() => {}}
        onDecrement={() => {}}
        incrementLabel="increment"
        decrementLabel="decrement"
      />
    ).toJSON();

    expect(json).toMatchSnapshot();
  });
});
