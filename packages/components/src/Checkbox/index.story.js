import { storiesOf } from '@storybook/react';
import React from 'react';
import Label from '../Label';
import { Checkbox, CheckboxShape, CheckboxWrapper } from './index.js';

storiesOf('controls & toggles|checkboxes', module)
  .add('default', () => (
    <>
      <CheckboxWrapper>
        <Checkbox id="checkbox1" />
        <CheckboxShape />
        <Label htmlFor="checkbox1">Checkbox</Label>
      </CheckboxWrapper>
      <CheckboxWrapper>
        <Checkbox defaultChecked id="checkbox5" />
        <CheckboxShape />
        <Label htmlFor="checkbox5">Checked</Label>
      </CheckboxWrapper>
    </>
  ))
  .add('indeterminate', () => (
    <CheckboxWrapper>
      <Checkbox indeterminate id="checkbox2" checked />
      <CheckboxShape />
      <Label htmlFor="checkbox2">Checkbox</Label>
    </CheckboxWrapper>
  ))
  .add('disabled', () => (
    <>
      <CheckboxWrapper>
        <Checkbox disabled id="checkbox3" />
        <CheckboxShape />
        <Label htmlFor="checkbox3">Disabled</Label>
      </CheckboxWrapper>
      <CheckboxWrapper>
        <Checkbox checked disabled id="checkbox4" />
        <CheckboxShape />
        <Label htmlFor="checkbox4">Checked disabled</Label>
      </CheckboxWrapper>
      <CheckboxWrapper>
        <Checkbox indeterminate disabled id="checkbox6" />
        <CheckboxShape />
        <Label htmlFor="checkbox6">Indeterminate disabled</Label>
      </CheckboxWrapper>
    </>
  ));
