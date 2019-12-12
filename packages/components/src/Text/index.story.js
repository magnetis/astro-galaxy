import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './index.js';

storiesOf('Text', module)
  .add('primary', () => <Text>Astro Galaxy</Text>)
  .add('secondary', () => <Text font="secondary">Astro Galaxy</Text>)
  .add('colors', () => (
    <>
      <Text color="earth400">earth400</Text>
      <Text color="mars400">mars400</Text>
      <Text color="moon400">moon400</Text>
      <Text color="space400">space400</Text>
      <Text color="sun400">sun400</Text>
      <Text color="uranus400">uranus400</Text>
      <Text color="venus400">venus400</Text>
    </>
  ))
  .add('sizes', () => (
    <>
      <Text fontSize="verySmall">verySmall</Text>
      <Text fontSize="small">small</Text>
      <Text fontSize="medium">medium</Text>
      <Text fontSize="large">large</Text>
    </>
  ))
  .add('as span', () => <Text as="span">medium</Text>);
