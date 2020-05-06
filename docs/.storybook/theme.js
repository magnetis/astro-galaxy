import { create } from '@storybook/theming/create';
import { colors } from '../../packages/tokens/src';

export default create({
  base: 'light',

  colorPrimary: colors.uranus500,
  colorSecondary: colors.moon500,

  // UI
  appBg: colors.space100,
  appContentBg: colors.space100,
  appBorderColor: colors.moon200,
  appBorderRadius: 0,

  // Typography
  fontBase: 'Lato, sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: colors.moon900,
  textInverseColor: 'transparent',

  // Toolbar default and active colors
  barTextColor: colors.moon500,
  barSelectedColor: colors.moon500,
  barBg: colors.space100,

  // Form colors
  inputBg: colors.space100,
  inputBorder: colors.moon500,
  inputTextColor: colors.moon900,
  inputBorderRadius: 8,

  brandTitle: 'Astro Galaxy',
  brandUrl: 'https://astro-galaxy.magnetis.com.br',
  brandImage: 'https://astro.magnetis.com.br/public/astro-logo.svg',
});
