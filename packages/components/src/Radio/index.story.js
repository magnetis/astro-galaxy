import React from 'react';
import { storiesOf } from '@storybook/react';
import { RadioWrapper, Radio, RadioShape } from './index.js';
import Label from '../Label';

storiesOf('radio', module)
  .add('radio', () => (
    <RadioWrapper>
      <Radio id="radio" />
      <RadioShape />
      <Label htmlFor="radio">Label</Label>
    </RadioWrapper>
  ))
  .add('radio disabled', () => (
    <RadioWrapper>
      <Radio disabled id="radio" />
      <RadioShape />
      <Label htmlFor="radio">Label</Label>
    </RadioWrapper>
  ));
