import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextAreaWrapper, TextArea, TextAreaLabel } from './index.js';

const TextAreaSample = () => (
  <>
    <TextAreaWrapper>
      <TextArea />
      <TextAreaLabel>Label</TextAreaLabel>
    </TextAreaWrapper>

    <TextAreaWrapper>
      <TextArea disabled />
      <TextAreaLabel>Label</TextAreaLabel>
    </TextAreaWrapper>
  </>
);

storiesOf('TextArea', module).add('default', () => <TextAreaSample />);
