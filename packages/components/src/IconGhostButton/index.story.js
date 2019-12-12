import React from 'react';
import { storiesOf } from '@storybook/react';
import IconGhostButton from './index.js';
import { IconCalendar } from '@magnetis/astro-galaxy-icons';

storiesOf('icon ghost buttons', module)
  .add('icon ghost button default', () => (
    <IconGhostButton>
      <IconCalendar />
    </IconGhostButton>
  ))
  .add('icon ghost buttons variants', () => (
    <>
      <IconGhostButton variant="ghost.uranus" iconlabel>
        <IconCalendar />
        uranus
      </IconGhostButton>
      <IconGhostButton variant="ghost.earth">
        <IconCalendar />
      </IconGhostButton>
      <IconGhostButton variant="ghost.venus">
        <IconCalendar />
      </IconGhostButton>
      <IconGhostButton variant="ghost.mars">
        <IconCalendar />
      </IconGhostButton>
      <IconGhostButton disabled>
        <IconCalendar />
      </IconGhostButton>
    </>
  ))
  .add('iconlabel ghost buttons', () => (
    <>
      <IconGhostButton variant="ghost.uranus" iconlabel>
        <IconCalendar />
        uranus
      </IconGhostButton>
      <IconGhostButton variant="ghost.earth" iconlabel>
        <IconCalendar />
        earth
      </IconGhostButton>
      <IconGhostButton variant="ghost.venus" iconlabel>
        <IconCalendar />
        venus
      </IconGhostButton>
      <IconGhostButton variant="ghost.mars" iconlabel>
        <IconCalendar />
        mars
      </IconGhostButton>
      <IconGhostButton disabled iconlabel>
        <IconCalendar />
        disabled
      </IconGhostButton>
    </>
  ))
  .add('iconlabelRight ghost buttons', () => (
    <>
      <IconGhostButton variant="ghost.uranus" iconlabel iconlabelRight>
        uranus
        <IconCalendar />
      </IconGhostButton>
      <IconGhostButton variant="ghost.earth" iconlabel iconlabelRight>
        earth
        <IconCalendar />
      </IconGhostButton>
      <IconGhostButton variant="ghost.venus" iconlabel iconlabelRight>
        venus
        <IconCalendar />
      </IconGhostButton>
      <IconGhostButton variant="ghost.mars" iconlabel iconlabelRight>
        mars
        <IconCalendar />
      </IconGhostButton>
      <IconGhostButton disabled iconlabel iconlabelRight>
        disabled
        <IconCalendar />
      </IconGhostButton>
    </>
  ));

storiesOf('icon ghost button sizes', module).add('icon ghost buttons sizes', () => (
  <>
    <IconGhostButton buttonSize="small">
      <IconCalendar />
    </IconGhostButton>
    <IconGhostButton buttonSize="medium">
      <IconCalendar />
    </IconGhostButton>
    <IconGhostButton buttonSize="large">
      <IconCalendar />
    </IconGhostButton>
  </>
));
