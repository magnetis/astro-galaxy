import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Slider from './index.js';

const SliderSample = props => {
  // TODO: improve the render issues
  const [value, setValue] = useState(50);
  return <Slider value={value} onChange={e => setValue(e.currentTarget.value)} {...props} />;
};

storiesOf('Slider', module)
  .add('default', () => <SliderSample min={-50} max={150} />)
  .add('disabled', () => <Slider disabled />)
  .add('full fill', () => <SliderSample fullFill />);
