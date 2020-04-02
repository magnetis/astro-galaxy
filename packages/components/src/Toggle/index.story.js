import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import Toggle from './index.js';

const ToggleSample = ({ disabled }) => {
  const [isToggled, setToggle] = useState(false);

  return (
    <>
      <Toggle
        label="default"
        isToggled={isToggled}
        onClick={() => setToggle(!isToggled)}
        disabled={disabled}
      />
    </>
  );
};

storiesOf('controls & toggles|toggles', module)
  .add('default', () => <ToggleSample />)
  .add('disabled', () => <ToggleSample disabled />);
