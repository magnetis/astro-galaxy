import React from 'react';
import { Label } from '@magnetis/astro-galaxy-components';
import { CheckboxWrapper, Checkbox, CheckboxShape } from '../index';

describe('Checkbox', () => {
  it('should render checkbox', () => {
    const json = rendererCreateWithTheme(
      <CheckboxWrapper>
        <Checkbox id="checkbox1" />
        <CheckboxShape />
        <Label htmlFor="checkbox1">Checkbox</Label>
      </CheckboxWrapper>
    ).toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should render a checked checkbox', () => {
    const json = rendererCreateWithTheme(
      <CheckboxWrapper>
        <Checkbox defaultChecked id="checkbox2" />
        <CheckboxShape />
        <Label htmlFor="checkbox2">Checked</Label>
      </CheckboxWrapper>
    ).toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should render a indeterminate checkbox', () => {
    const json = rendererCreateWithTheme(
      <CheckboxWrapper>
        <Checkbox indeterminate id="checkbox3" />
        <CheckboxShape />
        <Label htmlFor="checkbox3">Indeterminate</Label>
      </CheckboxWrapper>
    ).toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should render a disabled checkbox', () => {
    const json = rendererCreateWithTheme(
      <CheckboxWrapper>
        <Checkbox disabled id="checkbox4" />
        <CheckboxShape />
        <Label htmlFor="checkbox4">Disabled checkbox</Label>
      </CheckboxWrapper>
    ).toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should render a indeterminate disabled checkbox', () => {
    const json = rendererCreateWithTheme(
      <CheckboxWrapper>
        <Checkbox disabled indeterminate id="checkbox4" />
        <CheckboxShape />
        <Label htmlFor="checkbox4">Indeterminate disabled checkbox</Label>
      </CheckboxWrapper>
    ).toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should render a checked disabled checkbox', () => {
    const json = rendererCreateWithTheme(
      <CheckboxWrapper>
        <Checkbox defaultChecked disabled id="checkbox5" />
        <CheckboxShape />
        <Label htmlFor="checkbox5">Checked</Label>
      </CheckboxWrapper>
    ).toJSON();

    expect(json).toMatchSnapshot();
  });
});
