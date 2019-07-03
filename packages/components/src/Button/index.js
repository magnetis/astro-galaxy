import styled from 'styled-components';
import { color, space, border, fontSize, buttonStyle, typography } from 'styled-system';
import { font, buttonSizes } from "astro-core/src/custom-props";

const Button = styled.button(
  {
    appearance: 'button',
    cursor: 'pointer',
  },
  font,
  color,
  space,
  border,
  fontSize,
  typography,
  buttonStyle,
  buttonSizes,
);

Button.defaultProps = {
  px: 4,
  py: 1,
  font: 'primary',
  size: 'medium',
  variant: 'primaryUranus',
};

Button.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...buttonStyle.propTypes,
  ...border.propTypes,
  ...typography.propTypes,
};

export default Button;
