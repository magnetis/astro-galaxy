import React from 'react';
import { IconCalendar } from '@magnetis/astro-galaxy-icons';
import IconGhostButton from '../index';

describe('IconGhostButton', () => {
  it('should render an icon button with calendar icon', () => {
    const iconGhostButton = rendererCreateWithTheme(
      <IconGhostButton>
        <IconCalendar />
      </IconGhostButton>
    ).toJSON();

    expect(iconGhostButton).toMatchSnapshot();
  });

  it('should change padding when icon button size is small', () => {
    const iconGhostButton = rendererCreateWithTheme(
      <IconGhostButton buttonSize="small">
        <IconCalendar />
      </IconGhostButton>
    ).toJSON();

    expect(iconGhostButton).toMatchSnapshot();
    expect(iconGhostButton).toHaveStyleRule('padding', '5px 2px');
  });

  it('should change padding when icon button size is large', () => {
    const iconGhostButton = rendererCreateWithTheme(
      <IconGhostButton buttonSize="large">
        <IconCalendar />
      </IconGhostButton>
    ).toJSON();

    expect(iconGhostButton).toMatchSnapshot();
    expect(iconGhostButton).toHaveStyleRule('padding', '11px 9px');
  });

  it('should change color, background-color and border-color when variant is ghost.earth', () => {
    const iconGhostButton = rendererCreateWithTheme(
      <IconGhostButton variant="ghost.earth">
        <IconCalendar />
      </IconGhostButton>
    ).toJSON();

    expect(iconGhostButton).toMatchSnapshot();
  });

  it('should change background-color and border-color when variant is ghost.venus', () => {
    const iconButton = rendererCreateWithTheme(
      <IconGhostButton variant="ghost.venus">
        <IconCalendar />
      </IconGhostButton>
    ).toJSON();

    expect(iconButton).toMatchSnapshot();
  });

  it('should change background-color and border-color when variant is ghost.mars', () => {
    const iconButton = rendererCreateWithTheme(
      <IconGhostButton variant="ghost.mars">
        <IconCalendar />
      </IconGhostButton>
    ).toJSON();

    expect(iconButton).toMatchSnapshot();
  });
});
