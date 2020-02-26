import React from 'react';
import InputText from '../index';

function mount(props = {}) {
  return rendererCreateWithTheme(<InputText {...props} />).toJSON();
}

describe('InputText', () => {
  it('renders correctly the standard input', () => {
    const wrapper = mount({ inputId: 'input2' });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly the validated input', () => {
    const wrapper = mount({
      inputId: 'input2',
      isValidated: true,
      labelText: 'Validated',
      defaultValue: 'Astro Team',
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly the invalid input', () => {
    const wrapper = mount({
      inputId: 'input3',
      isInvalid: true,
      labelText: 'Invalid',
      defaultValue: 'Astro Team',
      errorMessage: 'Invalid data',
    });

    expect(wrapper).toMatchSnapshot();
  });
});
