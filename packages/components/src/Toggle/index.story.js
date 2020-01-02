import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Toggle from './index.js';

const ToggleSample = () => {
  const [isToggled, setToggle] = useState(false);

  return (
    <>
      <Toggle label="resgate total" isToggled={isToggled} onClick={() => setToggle(!isToggled)} />
      <Toggle label="disabled" disabled />
    </>
  );
};

storiesOf('Toggle', module).add('default', () => <ToggleSample />);
