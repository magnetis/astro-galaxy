import { storiesOf } from '@storybook/react';
import React from 'react';
import OutlineButton from './index.js';

storiesOf('buttons|outline buttons', module)
  .add('default', () => <OutlineButton>uranus</OutlineButton>)
  .add('variants', () => (
    <React.Fragment>
      <OutlineButton variant="outline.uranus">uranus</OutlineButton>
      <OutlineButton variant="outline.earth">earth</OutlineButton>
      <OutlineButton variant="outline.venus">venus</OutlineButton>
      <OutlineButton variant="outline.mars">mars</OutlineButton>
      <OutlineButton disabled>disabled</OutlineButton>
    </React.Fragment>
  ))
  .add('sizes', () => (
    <React.Fragment>
      <OutlineButton buttonSize="small">small</OutlineButton>
      <OutlineButton buttonSize="medium">medium ~ default</OutlineButton>
      <OutlineButton buttonSize="large">large</OutlineButton>
    </React.Fragment>
  ));
