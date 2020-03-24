import { theme } from '@magnetis/astro-galaxy-core';
import React from 'react';
import InputGhost from '../index';

const build = (props = {}) => {
  const mergedProps = {
    inputId: 'inputId',
    labelId: 'labelId',
    ...props,
  };

  return rendererCreateWithTheme(<InputGhost {...mergedProps} />);
};

describe('InputGhost', () => {
  it('renders correctly', () => {
    expect(build().toJSON()).toMatchSnapshot();
  });

  it('renders input with the ghost colors', () => {
    const input = build().toJSON().children[0];

    expect(input).toHaveStyleRule('background-color', 'transparent');
    expect(input).toHaveStyleRule('border-color', theme.colors.space100);
    expect(input).toHaveStyleRule('color', theme.colors.space100);
  });
});
