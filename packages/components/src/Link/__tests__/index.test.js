import React from 'react';
import Link from '../index';

describe('Link', () => {
  describe('default render', () => {
    it('should render', () => {
      const json = rendererCreateWithTheme(<Link />).toJSON();

      expect(json).toMatchSnapshot();
    });
  });

  describe('when font is secondary', () => {
    it('should render', () => {
      const json = rendererCreateWithTheme(<Link font="secondary" />).toJSON();

      expect(json).toMatchSnapshot();
    });
  });

  describe('when size is small', () => {
    it('should render', () => {
      const json = rendererCreateWithTheme(<Link fontSize="small" />).toJSON();

      expect(json).toMatchSnapshot();
    });
  });
});
