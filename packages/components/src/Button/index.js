import styled from 'styled-components';
import { color, space, border, fontSize, buttonStyle, typography } from 'styled-system';

const Button = styled.button(
  {
    appearance: 'button',
    cursor: 'pointer',
  },
  color,
  space,
  border,
  fontSize,
  typography,
  buttonStyle,
);

Button.defaultProps = {
  variant: 'primaryUranus',
  px: 4,
  py: 3,
  fontSize: 1,
  borderRadius: 4,
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
