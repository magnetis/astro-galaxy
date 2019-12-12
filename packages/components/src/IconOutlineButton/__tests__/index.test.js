import React from 'react';
import { theme } from '@magnetis/astro-galaxy-core';
import { IconCalendar } from '@magnetis/astro-galaxy-icons';
import IconOutlineButton from '../index';

describe('IconOutlineButton', () => {
  it('should render an icon button with calendar icon', () => {
    const iconButton = rendererCreateWithTheme(
      <IconOutlineButton>
        <IconCalendar />
      </IconOutlineButton>
    ).toJSON();

    expect(iconButton).toMatchSnapshot();
  });

  it('should change padding when icon button size is small', () => {
    const iconButton = rendererCreateWithTheme(
      <IconOutlineButton buttonSize="small">
        <IconCalendar />
      </IconOutlineButton>
    ).toJSON();

    expect(iconButton).toMatchSnapshot();
    expect(iconButton).toHaveStyleRule('padding', '5px 2px');
  });

  it('should change padding when icon button size is large', () => {
    const iconButton = rendererCreateWithTheme(
      <IconOutlineButton buttonSize="large">
        <IconCalendar />
      </IconOutlineButton>
    ).toJSON();

    expect(iconButton).toMatchSnapshot();
    expect(iconButton).toHaveStyleRule('padding', '11px 9px');
  });

  it('should border-color when variant is outline.earth', () => {
    const iconButton = rendererCreateWithTheme(
      <IconOutlineButton variant="outline.earth">
        <IconCalendar />
      </IconOutlineButton>
    ).toJSON();

    expect(iconButton).toMatchSnapshot();
    expect(iconButton).toHaveStyleRule('border-color', theme.colors.earth600);
  });

  it('should change border-color when variant is outline.venus', () => {
    const iconButton = rendererCreateWithTheme(
      <IconOutlineButton variant="outline.venus">
        <IconCalendar />
      </IconOutlineButton>
    ).toJSON();

    expect(iconButton).toMatchSnapshot();
    expect(iconButton).toHaveStyleRule('border-color', theme.colors.venus400);
  });

  it('should change border-color when variant is outline.mars', () => {
    const iconButton = rendererCreateWithTheme(
      <IconOutlineButton variant="outline.mars">
        <IconCalendar />
      </IconOutlineButton>
    ).toJSON();

    expect(iconButton).toMatchSnapshot();
    expect(iconButton).toHaveStyleRule('border-color', theme.colors.mars500);
  });
});
