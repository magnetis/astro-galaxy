import { storiesOf } from '@storybook/react';
import map from 'lodash/map';
import React from 'react';
import * as icons from './lib/index.es';

/**
  - To apply different sizes we shall use width and height props with the following values:
  small = 24
  medium = 32
  large = 40

  - To apply spacing (margin-left and margin-right) we shall use ml (marginLeft) and mr (marginRight) with the following values:

  8px = 1 (space array index 1)
**/
const Story = () => {
  return map(icons, (Icon, IconName) => (
    <Icon key={IconName} color="uranus500" width="40" height="40" m={1} />
  ));
};

storiesOf('iconography|icons', module).add('all', () => <Story />);
