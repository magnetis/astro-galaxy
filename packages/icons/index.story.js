import React from 'react';
import { storiesOf } from "@storybook/react";
import map from 'lodash/map';
import * as icons from './lib/icons/index';

const Story = () => {
  return map(icons, (Icon, IconName) => (
    <Icon key={IconName} color='earth500' width='40' height='40' m={2} />
  ));
}

storiesOf('iconography', module)
  .add('Astro icons', () => <Story />)
