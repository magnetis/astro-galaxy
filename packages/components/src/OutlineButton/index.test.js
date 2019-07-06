import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import OutlineButton from './index';

describe('OutlineButton', () => {
  it('should render a OutlineButton component', () => {
    const wrapper = mount(<OutlineButton>uranus</OutlineButton>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
