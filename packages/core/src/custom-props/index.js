import { system, variant } from 'styled-system';

export const font = system({
  font: {
    property: 'font',
    scale: 'fonts'
  }
});

export const buttonSizes = variant({
  prop: 'size',
  key: 'buttonSizes',
});