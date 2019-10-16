import React from 'react';
import { storiesOf } from '@storybook/react';
import OutlineButton from './index.js';

storiesOf('outline buttons', module)
  .add('button default', () => <OutlineButton>uranus</OutlineButton>)
  .add('outline buttons variants', () => (
    <React.Fragment>
      <OutlineButton variant="outline.uranus">uranus</OutlineButton>
      <OutlineButton variant="outline.earth">earth</OutlineButton>
      <OutlineButton variant="outline.venus">venus</OutlineButton>
      <OutlineButton variant="outline.mars">mars</OutlineButton>
      <OutlineButton disabled>disabled</OutlineButton>
    </React.Fragment>
  ));

storiesOf('outline button sizes', module).add('outline buttons sizes', () => (
  <React.Fragment>
    <OutlineButton buttonSize="small">small</OutlineButton>
    <OutlineButton buttonSize="medium">medium ~ default</OutlineButton>
    <OutlineButton buttonSize="large">large</OutlineButton>
  </React.Fragment>
));
