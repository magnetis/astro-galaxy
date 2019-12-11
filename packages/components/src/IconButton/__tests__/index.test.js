import React from 'react';

import IconButton from '../index';

describe('IconButton', () => {
  it('should render', () => {
    const json = rendererCreateWithTheme(<IconButton />).toJSON();
    
    expect(json).toMatchSnapshot();
  });
});
