import { AstroThemeProvider } from '@magnetis/astro-galaxy-core';
import { addDecorator, configure } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

const StoryContainer = styled.div`
  padding: ${props => props.theme.space[2]}px;

  > * {
    margin: ${props => props.theme.space[1]}px;
  }
`;

addDecorator(story => (
  <AstroThemeProvider>
    <StoryContainer>{story()}</StoryContainer>
  </AstroThemeProvider>
));

// automatically import all files ending in *.story.js
const componentsContext = require.context('../packages/components', true, /.story\.js$/);
const iconsContext = require.context('../packages/icons', true, /.story\.js$/);

function loadStories() {
  componentsContext.keys().forEach(componentsContext);
  iconsContext.keys().forEach(iconsContext);
}

configure(loadStories, module);
