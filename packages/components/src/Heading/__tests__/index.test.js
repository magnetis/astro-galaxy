import React from 'react';
import Heading from '../index';

describe('Heading', () => {
  it('renders correctly', () => {
    const json = rendererCreateWithTheme(<Heading>Heading</Heading>).toJSON();

    expect(json).toMatchSnapshot();
  });

  describe('when heading "color" prop is set', () => {
    it('renders with "mars600"', () => {
      const json = rendererCreateWithTheme(<Heading color="mars600">Heading</Heading>).toJSON();
      expect(json.props.color).toBe('mars600');
    });
  });

  describe('when heading "fontSize" prop is set', () => {
    it('renders with "small" font size ', () => {
      const json = rendererCreateWithTheme(<Heading fontSize="small">Heading</Heading>).toJSON();
      expect(json.props.fontSize).toBe('small');
    });
  });
});
