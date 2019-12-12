import styled from 'styled-components';
import { color, space, layout, typography } from 'styled-system';

const Heading = styled.h1`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ${color}
  ${space}
  ${layout}
  ${typography}
  font: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.headings[props.fontSize]};
  ${props => props.fontSize === 'huge' && 'font-weight: 700'}
`;

Heading.displayName = 'Heading';

Heading.defaultProps = {
  color: 'moon900',
  fontSize: 'large',
};

Heading.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...layout.propTypes,
  ...typography.propTypes,
};

export default Heading;
