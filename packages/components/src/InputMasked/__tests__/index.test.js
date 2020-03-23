import toJson from 'enzyme-to-json';
import React from 'react';
import InputMasked, { maskTypes } from '../';

const build = (props = {}) => {
  const mergedProps = {
    inputId: 'inputId',
    labelId: 'labelId',
    ...props,
  };
  const wrapper = mountWithTheme(<InputMasked {...mergedProps} />);

  return {
    wrapper,
    input: wrapper.find('input'),
  };
};

describe('InputMasked', () => {
  it('renders CPF masked input', () => {
    const { wrapper, input } = build({ maskType: maskTypes.cpf });
    expect(input.instance().placeholder).toEqual('000.000.000-00');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders currency masked input', () => {
    const { wrapper, input } = build({ maskType: maskTypes.currency });
    expect(input.instance().placeholder).toEqual('0,00');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders date masked input', () => {
    const { wrapper, input } = build({ maskType: maskTypes.date });
    expect(input.instance().placeholder).toEqual('00/00/0000');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
