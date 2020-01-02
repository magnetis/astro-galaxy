import React from 'react';
import Toggle from '../index';

describe('Toggle', () => {
  it('should render a toggle button', () => {
    const json = rendererCreateWithTheme(<Toggle label="resgate total" />).toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should render a toggled toggle button', () => {
    const json = rendererCreateWithTheme(
      <Toggle isToggled={true} label="resgate total" />
    ).toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should render a disabled toggle button', () => {
    const json = rendererCreateWithTheme(<Toggle disabled label="resgate total" />).toJSON();

    expect(json).toMatchSnapshot();
  });
});
