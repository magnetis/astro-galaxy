import React from 'react';

import Slider from '../index';

const build = (props = {}) => {
  const mergedProps = {
    id: 'slider-default',
    min: -50,
    max: 150,
    value: 50,
    label: 'Slider',
    counterLabel: '50 coins',
    disabled: false,
    ...props,
  };
  const slider = rendererCreateWithTheme(<Slider {...mergedProps} />).toJSON();

  return {
    slider,
    input: slider.children.find(child => child.type === 'input'),
    label: slider.children.find(child => child.type === 'label'),
  };
};

describe('Slider', () => {
  it('renders default slider', () => {
    const { slider, input } = build();
    const { className, ...receivedProps } = input.props;

    const expectedProps = {
      counterLabel: '50 coins',
      disabled: false,
      id: 'slider-default',
      label: 'Slider',
      max: 150,
      min: -50,
      type: 'range',
      value: 50,
    };

    expect(expectedProps).toEqual(receivedProps);
    expect(slider).toMatchSnapshot();
  });

  it('renders Slider with correct ID', () => {
    const { slider, label, input } = build({ id: 'slider-id' });

    expect(label.props['htmlFor']).toEqual('slider-id');
    expect(input.props['id']).toEqual('slider-id');
    expect(slider).toMatchSnapshot();
  });

  it('reders disabled Slider', () => {
    const { slider, label, input } = build({ disabled: true });

    expect(label.props['disabled']).toBe(true);
    expect(input.props['disabled']).toBe(true);
    expect(slider).toMatchSnapshot();
  });
});
