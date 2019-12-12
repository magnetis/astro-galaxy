import React from 'react';
import { theme } from '@magnetis/astro-galaxy-core';

import Text from '../index';

describe('Text', () => {
  it('should render', () => {
    const json = rendererCreateWithTheme(<Text />).toJSON();
    expect(json).toMatchSnapshot();
  });

  describe('when `font` prop is `secondary`', () => {
    it('renders with font-family Lato', () => {
      const json = rendererCreateWithTheme(<Text font="secondary" />).toJSON();
      expect(json).toHaveStyleRule('font', 'normal normal 400 normal 16px/1.5 Lato,sans-serif');
    });
  });

  describe('when `color` prop is set', () => {
    it('renders with a defined color', () => {
      const json = rendererCreateWithTheme(<Text color="earth400" />).toJSON();
      expect(json).toHaveStyleRule('color', theme.colors.earth400);
    });
  });

  describe('when `fontSize` prop is set', () => {
    it('renders with a defined font size', () => {
      const json = rendererCreateWithTheme(<Text fontSize="verySmall" />).toJSON();
      expect(json).toHaveStyleRule('font-size', theme.fontSizes.texts.verySmall);
    });
  });
});
