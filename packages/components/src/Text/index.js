import styled from 'styled-components';
import { color, space, border, layout, buttonStyle, typography } from 'styled-system';
import { font } from '@magnetis/astro-galaxy-core';

const Text = styled.p`
  color: ${props => props.theme.colors[props.color]};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ${font};
  font-size: ${props => props.theme.fontSizes.text[props.fontSize]};
`;

Text.displayName = 'Text';

Text.defaultProps = {
  font: 'primary',
  color: 'moon900',
  fontSize: 'medium',
};

Text.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...border.propTypes,
  ...layout.propTypes,
  ...buttonStyle.propTypes,
  ...typography.propTypes,
};

export default Text;
