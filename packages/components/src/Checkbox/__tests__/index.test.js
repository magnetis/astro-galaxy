import React from 'react';

import Checkbox from '../index';

describe('Checkbox', () => {
  it('should render', () => {
    const json = rendererCreateWithTheme(<Checkbox />).toJSON();
    
    expect(json).toMatchSnapshot();
  });
});
