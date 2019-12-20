import React from 'react';
import { Label } from '@magnetis/astro-galaxy-components';
import { RadioWrapper, Radio, RadioShape } from '../index';

describe('Radio', () => {
  it('should render radio', () => {
    const json = rendererCreateWithTheme(
      <RadioWrapper>
        <Radio id="radio1" />
        <RadioShape />
        <Label htmlFor="radio1">Radio</Label>
      </RadioWrapper>
    ).toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should render a selected radio', () => {
    const json = rendererCreateWithTheme(
      <RadioWrapper>
        <Radio defaultChecked id="radio2" />
        <RadioShape />
        <Label htmlFor="radio2">Selected</Label>
      </RadioWrapper>
    ).toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should render a disabled radio', () => {
    const json = rendererCreateWithTheme(
      <RadioWrapper>
        <Radio disabled id="radio2" />
        <RadioShape />
        <Label htmlFor="radio2">Disabled</Label>
      </RadioWrapper>
    ).toJSON();

    expect(json).toMatchSnapshot();
  });

  it('should render a disabled selected radio', () => {
    const json = rendererCreateWithTheme(
      <RadioWrapper>
        <Radio defaultChecked disabled id="radio2" />
        <RadioShape />
        <Label htmlFor="radio2">Selected disabled</Label>
      </RadioWrapper>
    ).toJSON();

    expect(json).toMatchSnapshot();
  });
});
