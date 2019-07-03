import styled from 'styled-components';
import { color, space, border, fontSize, buttonStyle, typography } from 'styled-system';
import { font } from "astro-core/src/custom-props";

const Button = styled.button(
  {
    appearance: 'button',
    cursor: 'pointer',
    border: 0,
  },
  font,
  color,
  space,
  border,
  fontSize,
  typography,
  buttonStyle,
);

Button.defaultProps = {
  px: 4,
  py: 1,
  fontSize: 1,
  lineHeight: 2,
  borderRadius: 4,
  font: 'primary',
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
