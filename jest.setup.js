import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { AstroThemeProvider, webTheme } from '@magnetis/astro-galaxy-themes';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';

global.renderWithTheme = Tree => {
  return render(<AstroThemeProvider theme={webTheme} children={Tree} />);
};

global.rendererCreateWithTheme = Tree => {
  return renderer.create(<AstroThemeProvider theme={webTheme} children={Tree} />);
};

global.mountWithTheme = Tree => {
  return mount(<AstroThemeProvider theme={webTheme} children={Tree} />);
};

global.requestAnimationFrame =
  global.requestAnimationFrame ||
  function _raf(cb) {
    return setTimeout(cb, 0);
  };

configure({ adapter: new Adapter() });
