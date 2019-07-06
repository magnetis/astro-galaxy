import React from 'react';
import { storiesOf } from "@storybook/react";
import Button from './index.js';

storiesOf('Buttons', module)
  .add('button default', () => <Button>uranus</Button>)
  .add('primary buttons variants', () => (
    <React.Fragment>
      <Button variant='primary.uranus'>uranus</Button>
      <Button variant='primary.earth'>earth</Button>
      <Button variant='primary.venus'>venus</Button>
      <Button variant='primary.mars'>mars</Button>
    </React.Fragment>
  ));

storiesOf('Button small', module)
  .add('button uranus small', () => <Button buttonSize='small'>uranus</Button>);

storiesOf('Button large', module)
  .add('button uranus large', () => <Button buttonSize='large'>uranus</Button>);
