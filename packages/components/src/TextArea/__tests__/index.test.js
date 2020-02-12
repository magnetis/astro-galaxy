import React from 'react';
import { TextAreaWrapper, TextArea, TextAreaLabel } from '../index';

function mount(props = {}) {
  return rendererCreateWithTheme(
    <TextAreaWrapper>
      <TextArea {...props} />
      <TextAreaLabel>Label</TextAreaLabel>
    </TextAreaWrapper>
  );
}

describe('TextArea', () => {
  it('should render', () => {
    const wrapper = mount();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render disabled', () => {
    const wrapper = mount({ disabled: true });
    expect(wrapper).toMatchSnapshot();
  });
});
