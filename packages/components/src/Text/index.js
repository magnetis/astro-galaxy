import { font } from '@magnetis/astro-galaxy-themes';
import styled from 'styled-components';
import { color, layout, space, typography } from 'styled-system';

const Text = styled.p`
  ${color}
  ${space}
  ${layout}
  ${typography}
  ${font}
  font-size: ${props => props.theme.fontSizes.texts[props.fontSize]};
`;

Text.displayName = 'Text';

Text.defaultProps = {
  font: 'secondary',
  color: 'moon900',
  fontSize: 'medium',
};

Text.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...layout.propTypes,
  ...typography.propTypes,
};

export default Text;
