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
  const slider = rendererCreateWithTheme(<Slider {...mergedProps} />);
  const { root } = slider;

  return {
    slider,
    label: root.findByType('label'),
    contentLabel: root.findAllByType('span'),
    input: root.findByType('input'),
  };
};

describe('Slider', () => {
  it('renders default slider', () => {
    const onChange = jest.fn();

    const { slider, input, contentLabel } = build({
      onChange,
    });
    const { className, ...receivedProps } = input.props;

    const expectedProps = {
      id: 'slider-default',
      min: -50,
      max: 150,
      value: 50,
      label: 'Slider',
      disabled: false,
      type: 'range',
      onChange,
    };

    expect(expectedProps).toEqual(receivedProps);
    expect(contentLabel.length).toEqual(2);
    expect(slider.toJSON()).toMatchSnapshot();
  });

  it('renders Slider with correct ID', () => {
    const { slider, label, input } = build({ id: 'slider-id' });

    expect(label.props['htmlFor']).toEqual('slider-id');
    expect(input.props['id']).toEqual('slider-id');
    expect(slider.toJSON()).toMatchSnapshot();
  });

  it('reders disabled Slider', () => {
    const { slider, label, input } = build({ disabled: true });

    expect(label.props['disabled']).toBe(true);
    expect(input.props['disabled']).toBe(true);
    expect(slider.toJSON()).toMatchSnapshot();
  });

  it('renders with label only', () => {
    const { slider, contentLabel } = build({
      counterLabel: null,
      label: 'Slider label',
    });
    const [labelText] = contentLabel[0].children;

    expect(contentLabel.length).toEqual(1);
    expect(labelText).toEqual('Slider label');
    expect(slider.toJSON()).toMatchSnapshot();
  });

  it('renders with counter only', () => {
    const { slider, contentLabel } = build({
      counterLabel: '30 coins',
      label: null,
    });
    const [counterText] = contentLabel[0].children;

    expect(contentLabel.length).toEqual(1);
    expect(counterText).toEqual('30 coins');
    expect(slider.toJSON()).toMatchSnapshot();
  });

  it('renders with counter only', () => {
    const { slider, contentLabel } = build({
      counterLabel: null,
      label: null,
    });

    expect(contentLabel.length).toEqual(0);
    expect(slider.toJSON()).toMatchSnapshot();
  });
});
