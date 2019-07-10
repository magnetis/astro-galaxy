import React from 'react';
import { storiesOf } from '@storybook/react';
import { RadioWrapper, Radio, RadioShape } from './index.js';

storiesOf('radio', module)
  .add('radio', () => (
    <RadioWrapper>
      <Radio />
      <RadioShape />
    </RadioWrapper>
  ))
  .add('radio disabled', () => (
    <RadioWrapper>
      <Radio disabled />
      <RadioShape />
    </RadioWrapper>
  ));
