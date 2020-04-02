import { Heading, Text } from '@magnetis/astro-galaxy-components';
import { IconCalendar, IconMoneyBag, IconPencil } from '@magnetis/astro-galaxy-icons';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tab, TabContent, TabItem, TabLabel } from './index.js';

storiesOf('controls & toggles|tabs', module)
  .add('default', () => (
    <Tab>
      <TabItem id="tab1" name="tabs" defaultChecked />
      <TabLabel htmlFor="tab1">
        <IconPencil />
        <span>tab 1</span>
      </TabLabel>
      <TabContent>
        <Heading as="h2">tab 1</Heading>
        <Text font="secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod nisi in orci mattis,
          ac iaculis orci lobortis.
        </Text>
        <Text font="secondary">
          Nullam imperdiet dolor a erat commodo laoreet a ut felis. Nam consequat nisl eu efficitur
          suscipit. Nulla dapibus cursus diam in convallis.
        </Text>
      </TabContent>
      <TabItem id="tab2" name="tabs" />
      <TabLabel htmlFor="tab2">
        <IconCalendar />
        <span>tab 2</span>
      </TabLabel>
      <TabContent>
        <Heading as="h2">tab 2</Heading>
        <Text font="secondary">
          Integer id pulvinar odio, sit amet accumsan lacus. Pellentesque accumsan sapien eget orci
          auctor, ac pulvinar orci porttitor. Sed fermentum turpis sed egestas commodo. In euismod
          nisi in orci mattis, ac iaculis orci lobortis.
        </Text>
      </TabContent>
      <TabItem id="tab3" name="tabs" />
      <TabLabel htmlFor="tab3">
        <IconMoneyBag />
        <span>tab 3</span>
      </TabLabel>
      <TabContent>
        <Heading as="h2">tab 3</Heading>
        <Text font="secondary">
          Integer id pulvinar odio, sit amet accumsan lacus. Pellentesque accumsan sapien eget orci
          auctor, ac pulvinar orci porttitor.
        </Text>
      </TabContent>
    </Tab>
  ))
  .add('horizontal', () => (
    <Tab horizontal>
      <TabItem id="tab1" name="tabs" defaultChecked />
      <TabLabel htmlFor="tab1">
        <IconPencil />
        <span>tab 1</span>
      </TabLabel>
      <TabContent>
        <Heading as="h2">tab 1</Heading>
        <Text font="secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod nisi in orci mattis,
          ac iaculis orci lobortis.
        </Text>
        <Text font="secondary">
          Nullam imperdiet dolor a erat commodo laoreet a ut felis. Nam consequat nisl eu efficitur
          suscipit. Nulla dapibus cursus diam in convallis.
        </Text>
      </TabContent>
      <TabItem id="tab2" name="tabs" />
      <TabLabel htmlFor="tab2">
        <IconCalendar />
        <span>tab 2</span>
      </TabLabel>
      <TabContent>
        <Heading as="h2">tab 2</Heading>
        <Text font="secondary">
          Integer id pulvinar odio, sit amet accumsan lacus. Pellentesque accumsan sapien eget orci
          auctor, ac pulvinar orci porttitor. Sed fermentum turpis sed egestas commodo. In euismod
          nisi in orci mattis, ac iaculis orci lobortis.
        </Text>
      </TabContent>
    </Tab>
  ));
