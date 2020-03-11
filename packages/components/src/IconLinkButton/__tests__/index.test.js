import React from 'react';
import { IconCalendar } from '@magnetis/astro-galaxy-icons';
import IconLinkButton from '../index';

describe('IconLinkButton', () => {
  it('should render an icon link button with calendar icon', () => {
    const iconButton = rendererCreateWithTheme(
      <IconLinkButton>
        <IconCalendar />
        hello
      </IconLinkButton>
    ).toJSON();

    expect(iconButton).toMatchSnapshot();
  });

  it('should change font-weight when icon link button has bold prop', () => {
    const iconButton = rendererCreateWithTheme(
      <IconLinkButton bold>
        <IconCalendar />
        world
      </IconLinkButton>
    ).toJSON();

    expect(iconButton).toMatchSnapshot();
    expect(iconButton).toHaveStyleRule('font-weight', '700');
  });

  it('should render an icon link button with calendar icon on the right side', () => {
    const iconButton = rendererCreateWithTheme(
      <IconLinkButton iconlabel iconlabelRight>
        hello
        <IconCalendar />
      </IconLinkButton>
    ).toJSON();

    expect(iconButton).toMatchSnapshot();
  });
});
