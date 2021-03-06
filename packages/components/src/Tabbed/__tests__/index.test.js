import { IconCalendar, IconClock, IconCup } from '@magnetis/astro-galaxy-icons';
import React from 'react';
import Tabbed, { Section, Tab } from '..';
import Text from '../../Text';

describe('Tabbed', () => {
  it('should render correctly', () => {
    const json = rendererCreateWithTheme(
      <Tabbed
        tabs={
          <>
            <Tab id="section1">
              <IconCup />
              section 1
            </Tab>
            <Tab id="section2">
              <IconCalendar />
              section 2
            </Tab>
            <Tab id="section3">
              <IconClock />
              section 3
            </Tab>
          </>
        }
        sections={
          <>
            <Section id="section1">
              <Text>
                Nullam imperdiet dolor a erat commodo laoreet a ut felis. Nam consequat nisl eu
                efficitur suscipit. Nulla dapibus cursus diam in convallis.
              </Text>
            </Section>
            <Section id="section2">
              <Text>
                Mauris sit amet egestas velit. Maecenas pulvinar sed nibh vel tincidunt. In vitae
                vestibulum ante. Morbi bibendum mi vitae purus vehicula, id bibendum arcu cursus.
              </Text>
            </Section>
            <Section id="section3">
              <Text>
                Nunc dolor justo, congue id malesuada ac, bibendum id odio. Integer dictum, lacus
                vitae rutrum faucibus, dolor diam lacinia erat, maximus mattis ligula libero at
                risus.
              </Text>
            </Section>
          </>
        }></Tabbed>
    ).toJSON();

    expect(json).toMatchSnapshot();
  });
});
