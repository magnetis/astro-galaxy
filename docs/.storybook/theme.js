import { create } from '@storybook/theming/create';
import { theme } from '../../packages/core/src';

export default create({
  base: 'light',

  colorPrimary: theme.colors.uranus500,
  colorSecondary: theme.colors.moon500,

  // UI
  appBg: theme.colors.space100,
  appContentBg: theme.colors.space100,
  appBorderColor: theme.colors.moon200,
  appBorderRadius: 0,

  // Typography
  fontBase: 'Lato, sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: theme.colors.moon900,
  textInverseColor: 'transparent',

  // Toolbar default and active colors
  barTextColor: theme.colors.moon500,
  barSelectedColor: theme.colors.moon500,
  barBg: theme.colors.space100,

  // Form colors
  inputBg: theme.colors.space100,
  inputBorder: theme.colors.moon500,
  inputTextColor: theme.colors.moon900,
  inputBorderRadius: 8,

  brandTitle: 'Astro Galaxy',
  brandUrl: 'https://astro-galaxy.magnetis.com.br',
  brandImage: 'https://astro.magnetis.com.br/public/astro-logo.svg',
});
