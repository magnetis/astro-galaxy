import { IconCalendar } from '@magnetis/astro-galaxy-icons';
import { storiesOf } from '@storybook/react';
import React from 'react';
import IconGhostButton from './index.js';

storiesOf('buttons|ghost icon buttons', module)
  .add('default', () => (
    <IconGhostButton>
      <IconCalendar />
    </IconGhostButton>
  ))
  .add('variants', () => (
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
  .add('sizes', () => (
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

storiesOf('buttons|ghost iconlabel buttons', module)
  .add('default', () => (
    <IconGhostButton iconlabel>
      <IconCalendar />
      label
    </IconGhostButton>
  ))
  .add('variants', () => (
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
  .add('right label', () => (
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
