import styled from 'styled-components';
import { color, space, layout, typography } from 'styled-system';
import { font } from '@magnetis/astro-galaxy-themes';

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
  font: 'primary',
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
