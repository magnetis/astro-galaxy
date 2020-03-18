import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Slider from './index.js';

storiesOf('Slider', module)
  .add('default', () => {
    const SliderDefault = props => {
      const [value, setValue] = useState(50);

      return (
        <Slider
          id="slider-default"
          min={-50}
          max={150}
          value={value}
          label="Slider"
          counterLabel={`${value} coins`}
          onChange={e => setValue(e.currentTarget.value)}
          {...props}
        />
      );
    };
    return <SliderDefault />;
  })
  .add('disabled', () => (
    <Slider id="slider-disabled" label="Slider" counterLabel="0 coins" disabled />
  ))
  .add('full fill', () => {
    const SliderFullFill = props => {
      const [value, setValue] = useState(50);

      return (
        <Slider
          id="slider-full-fill"
          min={-50}
          max={150}
          value={value}
          label="Slider"
          counterLabel={`${value} coins`}
          fullFill
          onChange={e => setValue(e.currentTarget.value)}
          {...props}
        />
      );
    };
    return <SliderFullFill />;
  })

  .add('only label', () => {
    const SliderOnlyLabel = props => {
      const [value, setValue] = useState(25);
      return (
        <Slider
          value={value}
          label="Slider"
          id="slider-only-label"
          min={0}
          max={50}
          onChange={e => setValue(e.currentTarget.value)}
          {...props}
        />
      );
    };
    return <SliderOnlyLabel />;
  })
  .add('only counter', () => {
    const SliderOnlyCounter = props => {
      const [value, setValue] = useState(25);
      return (
        <Slider
          value={value}
          counterLabel={`${value} coins`}
          id="slider-only-counter"
          min={0}
          max={50}
          onChange={e => setValue(e.currentTarget.value)}
          {...props}
        />
      );
    };
    return <SliderOnlyCounter />;
  })
  .add('without label and counter', () => {
    const OnlySlider = props => {
      const [value, setValue] = useState(25);
      return (
        <Slider
          value={value}
          min={20}
          max={30}
          onChange={e => setValue(e.currentTarget.value)}
          {...props}
        />
      );
    };
    return <OnlySlider />;
  });
