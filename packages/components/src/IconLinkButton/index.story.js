import React from 'react';
import { storiesOf } from '@storybook/react';
import { IconCalendar } from '@magnetis/astro-galaxy-icons';
import IconLinkButton from './index.js';

storiesOf('icon link button', module).add('default', () => (
  <div style={{ backgroundColor: '#32383c', height: '50vh' }}>
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
  </div>
));
