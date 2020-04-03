import React from 'react';
import InputControl from '../';

describe('InputControl', () => {
  it('renders correctly', () => {
    const json = rendererCreateWithTheme(
      <InputControl inputId="controlInputId" labelId="controlInputLabel" />
    ).toJSON();

    expect(json).toMatchSnapshot();
  });
});
