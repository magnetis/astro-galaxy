import { theme } from '@magnetis/astro-galaxy-core';
import { IconCalendar } from '@magnetis/astro-galaxy-icons';
import { storiesOf } from '@storybook/react';
import React from 'react';
import IconLinkButton from './index.js';

storiesOf('icon link button', module)
  .addParameters({
    backgrounds: [{ name: 'moon 900', value: theme.colors.moon900, default: true }],
  })
  .add('default', () => (
    <>
      <IconLinkButton>
        <IconCalendar />
        icon link
      </IconLinkButton>

      <IconLinkButton bold>
        <IconCalendar />
        icon link bold
      </IconLinkButton>

      <IconLinkButton iconlabel iconlabelRight>
        icon link
        <IconCalendar />
      </IconLinkButton>

      <IconLinkButton iconlabel iconlabelRight disabled>
        icon link
        <IconCalendar />
      </IconLinkButton>
    </>
  ));
