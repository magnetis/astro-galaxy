import React from 'react';
import { storiesOf } from '@storybook/react';
import IconButton from './index.js';
import { IconCalendar } from '@magnetis/astro-galaxy-icons';

storiesOf('icon buttons', module)
  .add('icon button default', () => (
    <IconButton>
      <IconCalendar />
    </IconButton>
  ))
  .add('primary icon buttons variants', () => (
    <React.Fragment>
      <IconButton variant="primary.uranus" iconlabel>
        <IconCalendar />
        uranus
      </IconButton>
      <IconButton variant="primary.earth">
        <IconCalendar />
      </IconButton>
      <IconButton variant="primary.venus">
        <IconCalendar />
      </IconButton>
      <IconButton variant="primary.mars">
        <IconCalendar />
      </IconButton>
      <IconButton disabled>
        <IconCalendar />
      </IconButton>
    </React.Fragment>
  ));

storiesOf('icon button sizes', module).add('primary icon buttons sizes', () => (
  <React.Fragment>
    <IconButton buttonSize="small">
      <IconCalendar />
    </IconButton>
    <IconButton buttonSize="medium">
      <IconCalendar />
    </IconButton>
    <IconButton buttonSize="large">
      <IconCalendar />
    </IconButton>
  </React.Fragment>
));
