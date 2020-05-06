import React from 'react';
import { colors } from '@magnetis/astro-galaxy-tokens';
import { IconCalendar } from '@magnetis/astro-galaxy-icons';
import IconButton from '../index';

describe('IconButton', () => {
  it('should render an icon button with calendar icon', () => {
    const iconButton = rendererCreateWithTheme(
      <IconButton>
        <IconCalendar />
      </IconButton>
    ).toJSON();

    expect(iconButton).toMatchSnapshot();
  });

  it('should change padding when icon button size is small', () => {
    const iconButton = rendererCreateWithTheme(
      <IconButton buttonSize="small">
        <IconCalendar />
      </IconButton>
    ).toJSON();

    expect(iconButton).toMatchSnapshot();
    expect(iconButton).toHaveStyleRule('padding', '5px 2px');
  });

  it('should change padding when icon button size is large', () => {
    const iconButton = rendererCreateWithTheme(
      <IconButton buttonSize="large">
        <IconCalendar />
      </IconButton>
    ).toJSON();

    expect(iconButton).toMatchSnapshot();
    expect(iconButton).toHaveStyleRule('padding', '11px 9px');
  });

  it('should change color, background-color and border-color when variant is primary.earth', () => {
    const iconButton = rendererCreateWithTheme(
      <IconButton variant="primary.earth">
        <IconCalendar />
      </IconButton>
    ).toJSON();

    expect(iconButton).toMatchSnapshot();
    expect(iconButton).toHaveStyleRule('color', colors.moon900);
    expect(iconButton).toHaveStyleRule('background-color', colors.earth400);
    expect(iconButton).toHaveStyleRule('border-color', colors.earth400);
  });

  it('should change background-color and border-color when variant is primary.venus', () => {
    const iconButton = rendererCreateWithTheme(
      <IconButton variant="primary.venus">
        <IconCalendar />
      </IconButton>
    ).toJSON();

    expect(iconButton).toMatchSnapshot();
    expect(iconButton).toHaveStyleRule('background-color', colors.venus400);
    expect(iconButton).toHaveStyleRule('border-color', colors.venus400);
  });

  it('should change background-color and border-color when variant is primary.mars', () => {
    const iconButton = rendererCreateWithTheme(
      <IconButton variant="primary.mars">
        <IconCalendar />
      </IconButton>
    ).toJSON();

    expect(iconButton).toMatchSnapshot();
    expect(iconButton).toHaveStyleRule('background-color', colors.mars500);
    expect(iconButton).toHaveStyleRule('border-color', colors.mars500);
  });
});
