import { AstroThemeProvider } from '@magnetis/astro-galaxy-core';
import { addDecorator } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

const StoryContainer = styled.div`
  padding: 0 ${props => props.theme.space[2]}px;

  > * {
    margin: ${props => props.theme.space[1]}px;
  }
`;

addDecorator(story => (
  <AstroThemeProvider injectFirst>
    <StoryContainer>{story()}</StoryContainer>
  </AstroThemeProvider>
));
