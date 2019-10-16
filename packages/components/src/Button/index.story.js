import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index.js';

storiesOf('buttons', module)
  .add('button default', () => <Button>uranus</Button>)
  .add('primary buttons variants', () => (
    <React.Fragment>
      <Button variant="primary.uranus">uranus</Button>
      <Button variant="primary.earth">earth</Button>
      <Button variant="primary.venus">venus</Button>
      <Button variant="primary.mars">mars</Button>
      <Button disabled>disabled</Button>
    </React.Fragment>
  ));

storiesOf('button sizes', module).add('primary buttons sizes', () => (
  <React.Fragment>
    <Button buttonSize="small">small</Button>
    <Button buttonSize="medium">medium ~ default</Button>
    <Button buttonSize="large">large</Button>
  </React.Fragment>
));
