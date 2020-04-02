import { IconCalendar } from '@magnetis/astro-galaxy-icons';
import { storiesOf } from '@storybook/react';
import React from 'react';
import IconButton from './index.js';

storiesOf('buttons|icon buttons', module)
  .add('default', () => (
    <IconButton>
      <IconCalendar />
    </IconButton>
  ))
  .add('variants', () => (
    <>
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
    </>
  ))
  .add('sizes', () => (
    <>
      <IconButton buttonSize="small">
        <IconCalendar />
      </IconButton>
      <IconButton buttonSize="medium">
        <IconCalendar />
      </IconButton>
      <IconButton buttonSize="large">
        <IconCalendar />
      </IconButton>
    </>
  ));
