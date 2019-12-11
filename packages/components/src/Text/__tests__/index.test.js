import React from 'react';

import Text from '../index';

describe('Text', () => {
  it('should render', () => {
    const json = rendererCreateWithTheme(<Text />).toJSON();
    
    expect(json).toMatchSnapshot();
  });
});
