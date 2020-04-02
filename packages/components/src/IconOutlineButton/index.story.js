import { IconCalendar } from '@magnetis/astro-galaxy-icons';
import { storiesOf } from '@storybook/react';
import React from 'react';
import IconOutlineButton from './index.js';

storiesOf('buttons|outline buttons', module)
  .add('default', () => (
    <IconOutlineButton>
      <IconCalendar />
    </IconOutlineButton>
  ))
  .add('variants', () => (
    <>
      <IconOutlineButton variant="outline.uranus">
        <IconCalendar />
      </IconOutlineButton>
      <IconOutlineButton variant="outline.earth">
        <IconCalendar />
      </IconOutlineButton>
      <IconOutlineButton variant="outline.venus">
        <IconCalendar />
      </IconOutlineButton>
      <IconOutlineButton variant="outline.mars">
        <IconCalendar />
      </IconOutlineButton>
      <IconOutlineButton disabled>
        <IconCalendar />
      </IconOutlineButton>
    </>
  ))
  .add('sizes', () => (
    <>
      <IconOutlineButton buttonSize="small">
        <IconCalendar />
      </IconOutlineButton>
      <IconOutlineButton buttonSize="medium">
        <IconCalendar />
      </IconOutlineButton>
      <IconOutlineButton buttonSize="large">
        <IconCalendar />
      </IconOutlineButton>
    </>
  ));

storiesOf('buttons|outline iconlabel buttons', module)
  .add('default', () => (
    <IconOutlineButton iconlabel>
      <IconCalendar />
      uranus
    </IconOutlineButton>
  ))
  .add('variants', () => (
    <>
      <IconOutlineButton variant="outline.uranus" iconlabel>
        <IconCalendar />
        uranus
      </IconOutlineButton>
      <IconOutlineButton variant="outline.earth" iconlabel>
        <IconCalendar />
        earth
      </IconOutlineButton>
      <IconOutlineButton variant="outline.venus" iconlabel>
        <IconCalendar />
        venus
      </IconOutlineButton>
      <IconOutlineButton variant="outline.mars" iconlabel>
        <IconCalendar />
        mars
      </IconOutlineButton>
      <IconOutlineButton iconlabel disabled>
        <IconCalendar />
        disabled
      </IconOutlineButton>
    </>
  ))
  .add('right label', () => (
    <>
      <IconOutlineButton variant="outline.uranus" iconlabel iconlabelRight>
        uranus
        <IconCalendar />
      </IconOutlineButton>
      <IconOutlineButton variant="outline.earth" iconlabel iconlabelRight>
        earth
        <IconCalendar />
      </IconOutlineButton>
      <IconOutlineButton variant="outline.venus" iconlabel iconlabelRight>
        venus
        <IconCalendar />
      </IconOutlineButton>
      <IconOutlineButton variant="outline.mars" iconlabel iconlabelRight>
        mars
        <IconCalendar />
      </IconOutlineButton>
      <IconOutlineButton iconlabel disabled>
        disabled
        <IconCalendar />
      </IconOutlineButton>
    </>
  ))
  .add('sizes', () => (
    <>
      <IconOutlineButton buttonSize="small" iconlabel>
        <IconCalendar />
        uranus
      </IconOutlineButton>
      <IconOutlineButton buttonSize="medium" iconlabel>
        <IconCalendar />
        uranus
      </IconOutlineButton>
      <IconOutlineButton buttonSize="large" iconlabel>
        <IconCalendar />
        uranus
      </IconOutlineButton>
    </>
  ));
