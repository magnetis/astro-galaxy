import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Slider from './index.js';

const SliderSample = () => {
  const [value, setValue] = useState(50);

  return (
    <Slider value={value} min={-50} max={150} onChange={e => setValue(e.currentTarget.value)} />
  );
};

storiesOf('Slider', module).add('default', () => <SliderSample />);
