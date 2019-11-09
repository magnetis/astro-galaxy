import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { AstroThemeProvider, theme } from '@magnetis/astro-galaxy-core';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';

global.renderWithTheme = Tree => {
  return render(<AstroThemeProvider theme={theme} children={Tree} />);
};

global.rendererCreateWithTheme = Tree => {
  return renderer.create(<AstroThemeProvider theme={theme} children={Tree} />);
};

global.requestAnimationFrame =
  global.requestAnimationFrame ||
  function _raf(cb) {
    return setTimeout(cb, 0);
  };

configure({ adapter: new Adapter() });
