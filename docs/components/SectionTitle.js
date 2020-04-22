import { theme } from '@magnetis/astro-galaxy-core';
import styled from 'styled-components';

export const SectionTitle = styled.h2`
  color: ${theme.colors.moon900};
  font: ${theme.fonts.primary};
  font-size: ${theme.fontSizes.headings.medium};
`;

export default SectionTitle;
