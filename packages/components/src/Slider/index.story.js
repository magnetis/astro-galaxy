import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Slider from './index.js';

const SliderSample = props => {
  // TODO: improve the render issues
  const [value, setValue] = useState(50);
  return (
    <Slider
      value={value}
      label="Slider"
      text={`${value} coins`}
      onChange={e => setValue(e.currentTarget.value)}
      {...props}
    />
  );
};

storiesOf('Slider', module)
  .add('default', () => <SliderSample min={-50} max={150} />)
  .add('disabled', () => <Slider label="Label" text="0 coins" disabled />)
  .add('full fill', () => <SliderSample fullFill />);
