import React from 'react';
import toJSON from 'enzyme-to-json';
import { mountWithTheme } from '@magnetis/astro-galaxy-core';
import Button from './index';

describe('Button', () => {
  it('should render a Button component', () => {
    const wrapper = mountWithTheme(<Button>uranus</Button>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
