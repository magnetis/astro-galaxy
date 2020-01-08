import React from 'react';

import Slider from '../index';

describe('Slider', () => {
  it('should render', () => {
    const json = rendererCreateWithTheme(<Slider />).toJSON();
    expect(json).toMatchSnapshot();
  });
});
