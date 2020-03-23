import React from 'react';
import InputText from '../index';

function mount(props = {}) {
  return rendererCreateWithTheme(<InputText {...props} />).toJSON();
}

describe('InputText', () => {
  it('renders correctly the standard input', () => {
    const wrapper = mount({ inputId: 'input1', labelId: 'label1' });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly the validated input', () => {
    const wrapper = mount({
      inputId: 'input2',
      labelId: 'label2',
      isValidated: true,
      labelText: 'Validated',
      defaultValue: 'Astro Team',
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly the invalid input', () => {
    const wrapper = mount({
      inputId: 'input3',
      labelId: 'label3',
      isInvalid: true,
      labelText: 'Invalid',
      defaultValue: 'Astro Team',
      errorMessage: 'Invalid data',
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly the input without animation', () => {
    const wrapper = mount({ inputId: 'input4', labelId: 'label4', noAnimate: true });
    expect(wrapper).toMatchSnapshot();
  });
});
