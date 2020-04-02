import { theme } from '@magnetis/astro-galaxy-core';
import { IconCalendar } from '@magnetis/astro-galaxy-icons';
import { storiesOf } from '@storybook/react';
import React from 'react';
import IconLinkButton from './index.js';

storiesOf('buttons|icon link buttons', module)
  .addParameters({
    backgrounds: [{ name: 'moon 900', value: theme.colors.moon900, default: true }],
  })
  .add('default', () => (
    <IconLinkButton>
      <IconCalendar />
      icon link
    </IconLinkButton>
  ))
  .add('bold', () => (
    <IconLinkButton bold>
      <IconCalendar />
      icon link
    </IconLinkButton>
  ))
  .add('right label', () => (
    <IconLinkButton iconlabel iconlabelRight>
      icon link
      <IconCalendar />
    </IconLinkButton>
  ))
  .add('disabled', () => (
    <IconLinkButton disabled>
      <IconCalendar />
      icon link
    </IconLinkButton>
  ));
