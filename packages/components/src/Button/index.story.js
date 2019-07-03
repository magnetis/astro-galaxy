import React from 'react';
import { storiesOf } from "@storybook/react";
import Button from './index.js';

storiesOf('Button', module)
  .add('button uranus', () => <Button>uranus</Button>)
  .add('button earth', () => <Button variant='primaryEarth'>earth</Button>);

storiesOf('Button small', module)
  .add('button uranus small', () => <Button size='small'>uranus</Button>);

storiesOf('Button large', module)
  .add('button uranus large', () => <Button size='large'>uranus</Button>);