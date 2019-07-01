import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import ThemeProvider from '../packages/core/src/theme-provider';

addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>);

// automatically import all files ending in *.stories.js
const req = require.context('../packages/components', true, /.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);