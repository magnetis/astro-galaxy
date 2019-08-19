import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { AstroThemeProvider } from '@magnetis/astro-galaxy-core';

addDecorator(story => <AstroThemeProvider>{story()}</AstroThemeProvider>);

// automatically import all files ending in *.story.js
const componentsContext = require.context('../packages/components', true, /.story\.js$/);
const iconsContext = require.context('../packages/icons', true, /.story\.js$/);

function loadStories() {
  componentsContext.keys().forEach(componentsContext);
  iconsContext.keys().forEach(iconsContext);
}

configure(loadStories, module);
