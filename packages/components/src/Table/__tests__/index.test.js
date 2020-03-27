import React from 'react';
import Table from '..';

describe('Table', () => {
  it('should render correctly', () => {
    const component = rendererCreateWithTheme(<Table />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
