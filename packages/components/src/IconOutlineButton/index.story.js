import React from 'react';
import { storiesOf } from '@storybook/react';
import IconOutlineButton from './index.js';
import { IconCalendar } from '@magnetis/astro-galaxy-icons';

storiesOf('icon outline buttons', module)
  .add('icon button default', () => (
    <IconOutlineButton>
      <IconCalendar />
    </IconOutlineButton>
  ))
  .add('icon outline buttons variants', () => (
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
  ));

storiesOf('icon outline button sizes', module).add('icon outline buttons sizes', () => (
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

storiesOf('iconlabel outline button', module)
  .add('iconlabel', () => (
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
  .add('iconlabelRight', () => (
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
  .add('iconlabel button sizes', () => (
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
