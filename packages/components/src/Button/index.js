import styled from 'styled-components';
import { color, space, border, layout, fontSize, buttonStyle, typography } from 'styled-system';
import { font, buttonSizes } from '@magnetis/astro-galaxy-core';

const hoverStyles = props => ({
  'primary.uranus': `
    background-color: ${props.theme.colors.uranus300};
    border-color: ${props.theme.colors.uranus300};
  `,
  'primary.earth': `
    background-color: ${props.theme.colors.earth200};
    border-color: ${props.theme.colors.earth200};
  `,
  'primary.venus': `
    background-color: ${props.theme.colors.venus200};
    border-color: ${props.theme.colors.venus200};
  `,
  'primary.mars': `
    background-color: ${props.theme.colors.mars300};
    border-color: ${props.theme.colors.mars300};
  `,
});

const activeStyles = props => ({
  'primary.uranus': `
    background-color: ${props.theme.colors.uranus600};
    border-color: ${props.theme.colors.uranus600};
  `,
  'primary.earth': `
    background-color: ${props.theme.colors.earth500};
    border-color: ${props.theme.colors.earth500};
  `,
  'primary.venus': `
    background-color: ${props.theme.colors.venus500};
    border-color: ${props.theme.colors.venus500};
  `,
  'primary.mars': `
    background-color: ${props.theme.colors.mars600};
    border-color: ${props.theme.colors.mars600};
  `,
});

const Button = styled.button`
  cursor: pointer;
  white-space: nowrap;
  text-align: center;
  transition: all 0.3s ease;
  overflow: hidden;
  border-width: 2px;
  border-style: solid;

  :disabled,
  .disabled {
    cursor: not-allowed;
    background-color: ${props => props.theme.colors.moon200};
    border-color: ${props => props.theme.colors.moon200};
    color: ${props => props.theme.colors.space100};
  }

  :hover:not(:disabled):not(.disabled),
  :focus:not(:disabled):not(.disabled) {
    ${props => hoverStyles(props)[props.variant]}
  }

  :active:not(:disabled):not(.disabled) {
    ${props => activeStyles(props)[props.variant]}
  }

  :focus {
    outline: none;
  }

  ${font};
  ${color};
  ${space};
  ${border};
  ${layout};
  ${fontSize};
  ${typography};
  ${buttonStyle};
  ${buttonSizes};
`;

Button.defaultProps = {
  display: 'inline-block',
  variant: 'primary.uranus',
  buttonSize: 'medium',
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
