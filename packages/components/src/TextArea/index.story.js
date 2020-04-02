import { storiesOf } from '@storybook/react';
import React from 'react';
import { TextArea, TextAreaLabel, TextAreaWrapper } from './index.js';

storiesOf('inputs|textarea inputs', module)
  .add('default', () => (
    <TextAreaWrapper>
      <TextArea />
      <TextAreaLabel>Label</TextAreaLabel>
    </TextAreaWrapper>
  ))
  .add('disabled', () => (
    <TextAreaWrapper>
      <TextArea disabled />
      <TextAreaLabel>Label</TextAreaLabel>
    </TextAreaWrapper>
  ));
