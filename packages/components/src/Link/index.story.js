import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from './index.js';

storiesOf('Link', module).add('default', () => (
  <>
    <Link>primary font - medium size</Link>
    <br />
    <Link font="secondary" fontSize="small">
      secondary font - small size
    </Link>
  </>
));
