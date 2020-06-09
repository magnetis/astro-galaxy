import React from 'react';
import Button from '../index';
import toJson from 'enzyme-to-json';

describe('Button component', () => {
  it('should render a button', () => {
    const button = rendererCreateWithTheme(<Button>Hello</Button>).toJSON();

    expect(button).toMatchSnapshot();
  });

  it('should change font-size and padding when button size is small', () => {
    const wrapper = toJson(mountWithTheme(<Button buttonSize="small">Click here!</Button>));
    const button = wrapper.children[0].children[1];
    expect(button).toMatchSnapshot();
    expect(button.props.buttonSize).toBe('small');
  });

  it('should change background-color and border-color when variant is primary.mars', () => {
    const wrapper = toJson(mountWithTheme(<Button variant="primary.mars">Click here!</Button>));
    const button = wrapper.children[0].children[1];
    expect(button).toMatchSnapshot();
    expect(button.props.variant).toBe('primary.mars');
  });
});
