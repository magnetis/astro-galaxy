import React from 'react';
import { mount } from 'enzyme';
import ThemeProvider from '../theme-provider';
import theme from '../themes/control';

export const mountWithTheme = (tree, theme) => {
  const WrappingThemeProvider = props => (
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
  );

  return mount(tree, { wrappingComponent: WrappingThemeProvider });
};
