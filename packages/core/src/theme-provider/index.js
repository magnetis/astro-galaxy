import React from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import theme from '../themes/control';

const ThemeProvider = props => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {props.children}
    </StyledComponentsThemeProvider>
  )
};

export default ThemeProvider;