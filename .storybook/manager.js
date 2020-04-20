import { addons } from '@storybook/addons';
import theme from './theme';

addons.setConfig({
  theme,
});

addons.register('initial-path', () => {
  if (!window.location.search) {
    window.location.href = '?path=/docs/home';
  }
});
