import React from 'react';
import toJSON from 'enzyme-to-json';
import { mountWithTheme } from '@magnetis/astro-galaxy-core';
import OutlineButton from './index';

describe('OutlineButton', () => {
  it('should render a OutlineButton component', () => {
    const wrapper = mountWithTheme(<OutlineButton>uranus</OutlineButton>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
