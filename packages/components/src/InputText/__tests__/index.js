import { webTheme } from '@magnetis/astro-galaxy-themes';
import React from 'react';
import InputText, { inputSizes } from '../index';

function mount(props = {}) {
  const mergedProps = {
    inputId: 'inputId',
    labelId: 'labelId',
    ...props,
  };
  return rendererCreateWithTheme(<InputText {...mergedProps} />).toJSON();
}

describe('input text', () => {
  it('renders correctly the standard input', () => {
    const wrapper = mount();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly the validated input', () => {
    const wrapper = mount({
      isValidated: true,
      labelText: 'Validated',
      defaultValue: 'Astro Team',
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly the invalid input', () => {
    const wrapper = mount({
      isInvalid: true,
      labelText: 'Invalid',
      defaultValue: 'Astro Team',
      errorMessage: 'Invalid data',
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly the input without animation', () => {
    const wrapper = mount({ noAnimate: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly the large input and checks its font size', () => {
    const wrapper = mount({ inputSize: inputSizes.large });
    const input = wrapper.children[0];
    expect(input).toHaveStyleRule('font-size', webTheme.fontSizes.texts.large);
    expect(wrapper).toMatchSnapshot();
  });
});
