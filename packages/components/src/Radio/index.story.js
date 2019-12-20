import React from 'react';
import { storiesOf } from '@storybook/react';
import { RadioWrapper, Radio, RadioShape } from './index.js';
import Label from '../Label';

storiesOf('radio', module)
  .add('radio', () => (
    <>
      <RadioWrapper>
        <Radio id="radio1" name="radiogroup1" />
        <RadioShape />
        <Label htmlFor="radio1">Radio</Label>
      </RadioWrapper>
      <RadioWrapper>
        <Radio id="radio2" name="radiogroup1" defaultChecked />
        <RadioShape />
        <Label htmlFor="radio2">Selected</Label>
      </RadioWrapper>
    </>
  ))
  .add('radio with center align', () => (
    <>
      <RadioWrapper>
        <Radio id="radio4" name="radiogroup3" />
        <RadioShape />
        <Label htmlFor="radio4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Sed risus pretium quam vulputate dignissim suspendisse.
        </Label>
      </RadioWrapper>
      <RadioWrapper center>
        <Radio id="radio5" name="radiogroup3" />
        <RadioShape />
        <Label htmlFor="radio5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Sed risus pretium quam vulputate dignissim suspendisse.
        </Label>
      </RadioWrapper>
    </>
  ))
  .add('radio disabled', () => (
    <RadioWrapper>
      <Radio disabled id="radio3" name="radiogroup2" />
      <RadioShape />
      <Label htmlFor="radio3">Disabled</Label>
    </RadioWrapper>
  ));
