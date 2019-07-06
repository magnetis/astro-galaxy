import styled from 'styled-components';
import { color, space, border, layout, fontSize, buttonStyle, typography } from 'styled-system';
import { font, buttonSizes } from "astro-core/src/custom-props";

const Button = styled.button(
  {
    cursor: 'pointer',
    whiteSpace: 'no-wrap',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
  },
  font,
  color,
  space,
  border,
  layout,
  fontSize,
  typography,
  buttonStyle,
  buttonSizes,
);

Button.defaultProps = {
  display: 'inline-block',
  px: 4,
  py: 1,
  variant: 'primaryUranus',
  size: 'medium',
  font: 'primary',
};

Button.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...border.propTypes,
  ...layout.propTypes,
  ...fontSize.propTypes,
  ...buttonStyle.propTypes,
  ...typography.propTypes,
};

export default Button;
