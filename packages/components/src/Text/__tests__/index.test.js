import { webTheme } from '@magnetis/astro-galaxy-themes';
import React from 'react';
import Text from '../index';

describe('Text', () => {
  it('renders correctly', () => {
    const json = rendererCreateWithTheme(<Text>Text</Text>).toJSON();
    expect(json).toMatchSnapshot();
  });

  describe('when `font` prop is `primary`', () => {
    it('renders with font-family Poppins', () => {
      const json = rendererCreateWithTheme(<Text font="primary">Text</Text>).toJSON();
      expect(json).toHaveStyleRule('font', 'normal normal 600 normal 16px/1.5 Poppins,sans-serif');
    });
  });

  describe('when `color` prop is set', () => {
    it('renders with a defined color', () => {
      const json = rendererCreateWithTheme(<Text color="earth400">Text</Text>).toJSON();
      expect(json).toHaveStyleRule('color', webTheme.colors.earth400);
    });
  });

  describe('when `fontSize` prop is set', () => {
    it('renders with a defined font size', () => {
      const json = rendererCreateWithTheme(<Text fontSize="verySmall">Text</Text>).toJSON();
      expect(json).toHaveStyleRule('font-size', webTheme.fontSizes.texts.verySmall);
    });
  });
});
