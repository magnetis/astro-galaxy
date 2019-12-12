import React from 'react';

import Heading from '../index';
import { theme } from '@magnetis/astro-galaxy-core';

describe('Heading', () => {
  it('renders correctly', () => {
    const json = rendererCreateWithTheme(<Heading />).toJSON();

    expect(json).toMatchSnapshot();
  });

  describe('when heading "color" prop is set', () => {
    it('renders with "mars600"', () => {
      const json = rendererCreateWithTheme(<Heading color="mars600" />).toJSON();
      expect(json).toHaveStyleRule('color', theme.colors.mars600);
    });
  });

  describe('when heading "fontSize" prop is set', () => {
    it('renders with "small" font size ', () => {
      const json = rendererCreateWithTheme(<Heading fontSize="small" />).toJSON();
      expect(json).toHaveStyleRule('font-size', theme.fontSizes.headings.small);
    });
  });
});
