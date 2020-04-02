import { storiesOf } from '@storybook/react';
import React from 'react';
import Heading from './index.js';

storiesOf('typography|heading', module)
  .add('default', () => <Heading>Astro Galaxy</Heading>)
  .add('colors', () => (
    <>
      <Heading color="earth400">earth400</Heading>
      <Heading color="mars400">mars400</Heading>
      <Heading color="moon400">moon400</Heading>
      <Heading color="space400">space400</Heading>
      <Heading color="sun400">sun400</Heading>
      <Heading color="uranus400">uranus400</Heading>
      <Heading color="venus400">venus400</Heading>
    </>
  ))
  .add('sizes', () => (
    <>
      <Heading fontSize="small">small</Heading>
      <Heading fontSize="medium">medium</Heading>
      <Heading fontSize="large">large</Heading>
      <Heading fontSize="huge">huge</Heading>
    </>
  ))
  .add('as <h{number}>', () => (
    <>
      <Heading>H1</Heading>
      <Heading as="h2">H2</Heading>
      <Heading as="h3">H3</Heading>
      <Heading as="h4">H4</Heading>
      <Heading as="h5">H5</Heading>
      <Heading as="h6">H6</Heading>
    </>
  ));
