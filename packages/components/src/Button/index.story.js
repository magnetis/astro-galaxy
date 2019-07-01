import React from 'react';
import { storiesOf } from "@storybook/react";
import Button from './index.js';

storiesOf('Button', module)
  .add('button uranus', () => <Button>uranus</Button>)
  .add('button earth', () => <Button variant='primaryEarth'>earth</Button>);