import React from 'react';

import Heading from '../index';

describe('Heading', () => {
  it('should render', () => {
    const json = rendererCreateWithTheme(<Heading />).toJSON();

    expect(json).toMatchSnapshot();
  });
});
