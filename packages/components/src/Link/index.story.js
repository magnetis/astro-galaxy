import { storiesOf } from '@storybook/react';
import React from 'react';
import Link from './index.js';

storiesOf('buttons|links', module).add('default', () => (
  <>
    <Link>primary font - medium size</Link>
    <br />
    <Link font="secondary" fontSize="small">
      secondary font - small size
    </Link>
  </>
));
