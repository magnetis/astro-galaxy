import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from './index.js';

storiesOf('buttons|primary buttons', module)
  .add('default', () => <Button>uranus</Button>)
  .add('variants', () => (
    <>
      <Button variant="primary.uranus">uranus</Button>
      <Button variant="primary.earth">earth</Button>
      <Button variant="primary.venus">venus</Button>
      <Button variant="primary.mars">mars</Button>
      <Button disabled>disabled</Button>
    </>
  ))
  .add('sizes', () => (
    <>
      <Button buttonSize="small">small</Button>
      <Button buttonSize="medium">medium ~ default</Button>
      <Button buttonSize="large">large</Button>
    </>
  ));
