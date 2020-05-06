import { webTheme } from '@magnetis/astro-galaxy-themes';
import styled from 'styled-components';

export const SectionTitle = styled.h2`
  color: ${webTheme.colors.moon900};
  font: ${webTheme.fonts.primary};
  font-size: ${webTheme.fontSizes.headings.medium};
`;

export default SectionTitle;
