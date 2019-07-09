import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Button from './index';

describe('Button', () => {
  it('should render a Button component', () => {
    const wrapper = mount(<Button>uranus</Button>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
