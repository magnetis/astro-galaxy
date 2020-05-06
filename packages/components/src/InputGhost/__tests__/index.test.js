import { colors } from '@magnetis/astro-galaxy-tokens';
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
    expect(input).toHaveStyleRule('border-color', colors.space100);
    expect(input).toHaveStyleRule('color', colors.space100);
  });
});
