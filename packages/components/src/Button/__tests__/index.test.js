import React from 'react';
import { theme } from '@magnetis/astro-galaxy-core';
import Button from '../index';

describe('Button component', () => {
  it('should render a button', () => {
    const button = rendererCreateWithTheme(<Button>Hello</Button>).toJSON();

    expect(button).toMatchSnapshot();
  });

  it('should change font-size and padding when button size is small', () => {
    const button = rendererCreateWithTheme(
      <Button buttonSize="small">Click here!</Button>
    ).toJSON();

    expect(button).toMatchSnapshot();
    expect(button).toHaveStyleRule('font-size', '12px');
    expect(button).toHaveStyleRule('padding', '5px 28px');
  });

  it('should change background-color and border-color when variant is primary.mars', () => {
    const button = rendererCreateWithTheme(
      <Button variant="primary.mars">Click here!</Button>
    ).toJSON();

    expect(button).toMatchSnapshot();
    expect(button).toHaveStyleRule('background-color', theme.colors.mars500);
    expect(button).toHaveStyleRule('border-color', theme.colors.mars500);
  });
});
