import { theme } from '@magnetis/astro-galaxy-core';
import { IconPencil, IconTrash } from '@magnetis/astro-galaxy-icons';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Table from '.';
import IconGhostButton from '../IconGhostButton';

const backgroundSelector = darkMode => ({
  backgrounds: [
    { name: 'space 100', value: theme.colors.space100, default: !darkMode },
    { name: 'moon 900', value: theme.colors.moon900, default: darkMode },
  ],
});

const DemoTable = props => (
  <Table darkMode={boolean('dark mode', props.darkMode)}>
    <thead>
      <tr>
        <th>Category</th>
        <th>Fund</th>
        <th>Investment</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Monthly Income</td>
        <td>FI Alaska Private Plus</td>
        <td>$ 87,900.00</td>
        <td>
          <IconGhostButton variant="ghost.uranus">
            <IconPencil />
          </IconGhostButton>
          <IconGhostButton variant="ghost.mars">
            <IconTrash />
          </IconGhostButton>
        </td>
      </tr>
      <tr>
        <td>Retirement Plan</td>
        <td>Icatu FAFI Future</td>
        <td>$ 143,273.00</td>
        <td>
          <IconGhostButton variant="ghost.uranus">
            <IconPencil />
          </IconGhostButton>
          <IconGhostButton variant="ghost.mars">
            <IconTrash />
          </IconGhostButton>
        </td>
      </tr>
      <tr disabled>
        <td>Stocks</td>
        <td>ETF Small 11</td>
        <td>$ 1,230.35</td>
        <td>
          <IconGhostButton variant="ghost.uranus">
            <IconPencil />
          </IconGhostButton>
          <IconGhostButton variant="ghost.mars">
            <IconTrash />
          </IconGhostButton>
        </td>
      </tr>
    </tbody>
  </Table>
);

storiesOf('tables|tables', module)
  .addDecorator(withKnobs)
  .add('default', () => <DemoTable />, backgroundSelector(false))
  .add('dark mode', () => <DemoTable darkMode />, backgroundSelector(true));
