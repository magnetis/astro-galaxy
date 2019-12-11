import styled from 'styled-components';

const Heading = styled.h1`
  color: ${props => props.theme.colors[props.color]};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.headings[props.fontSize]};
  ${props => props.fontSize === 'huge' && 'font-weight: 700'}
`;

Heading.displayName = 'Heading';

Heading.defaultProps = {
  color: 'moon900',
  fontSize: 'large',
};

Heading.propTypes = {};

export default Heading;
