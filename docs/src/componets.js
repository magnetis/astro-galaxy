import * as AstroComponents from '@magnetis/astro-galaxy-components';
import styled from 'styled-components';
import { theme } from '@magnetis/astro-galaxy-core';
import { color, fontSize } from 'styled-system';
import { components as mdxDocsComponents } from 'mdx-docs';

const RouterLink = styled(mdxDocsComponents.a)(
  {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  color
);

export const Code = styled.code`
  font-family: monospace;
  ${color} ${fontSize};
`;

const components = {
  ...AstroComponents,
};

export default components;
