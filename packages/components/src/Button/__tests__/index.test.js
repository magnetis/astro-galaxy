import React from 'react';
import { shallow } from 'enzyme';
import { AstroThemeProvider } from '@magnetis/astro-galaxy-core';
import Button from '../index';

describe('Button', () => {
  const build = (props = {}, text) => {
    const wrapper = shallow(
      <AstroThemeProvider>
        <Button {...props}>{text}</Button>
      </AstroThemeProvider>
    );
    return wrapper;
  };

  it('should render default Button component', () => {
    const shallowButton = build({ id: 'my-button', mt: 10 }, 'uranus');
    const btn = shallowButton.find('#my-button');

    const expectedProps = {
      id: 'my-button',
      mt: 10,
      children: 'uranus',
      display: 'inline-block',
      variant: 'primary.uranus',
      buttonSize: 'medium',
      font: 'primary',
    };

    expect(btn.props()).toEqual(expectedProps);
  });

  it('should render disabled button', () => {
    const wrapper = shallow(<Button disabled>uranus</Button>);

    expect(wrapper.find('[disabled]')).toHaveLength(1);
  });
});
