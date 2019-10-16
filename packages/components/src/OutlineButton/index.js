import styled from 'styled-components';
import Button from '../Button';

const hoverStyles = props => ({
  'outline.uranus': `
    background-color: ${props.theme.colors.uranus400};
    border-color: ${props.theme.colors.uranus400};
    color: ${props.theme.colors.space100};
  `,
  'outline.earth': `
    background-color: ${props.theme.colors.earth300};
    border-color: ${props.theme.colors.earth300};
    color: ${props.theme.colors.moon900};
  `,
  'outline.venus': `
    background-color: ${props.theme.colors.venus300};
    border-color: ${props.theme.colors.venus300};
    color: ${props.theme.colors.space100};
  `,
  'outline.mars': `
    background-color: ${props.theme.colors.mars400};
    border-color: ${props.theme.colors.mars400};
    color: ${props.theme.colors.space100};
  `,
});

const activeStyles = props => ({
  'outline.uranus': `
    background-color: ${props.theme.colors.uranus600};
    border-color: ${props.theme.colors.uranus600};
  `,
  'outline.earth': `
    background-color: ${props.theme.colors.earth500};
    border-color: ${props.theme.colors.earth500};
  `,
  'outline.venus': `
    background-color: ${props.theme.colors.venus500};
    border-color: ${props.theme.colors.venus500};
  `,
  'outline.mars': `
    background-color: ${props.theme.colors.mars600};
    border-color: ${props.theme.colors.mars600};
  `,
});

const OutlineButton = styled(Button)`
  background-color: transparent;

  :disabled {
    cursor: not-allowed;
    background-color: transparent;
    border-color: ${props => props.theme.colors.moon200};
    color: ${props => props.theme.colors.moon200};
  }

  :hover:not(:disabled),
  :focus:not(:disabled) {
    ${props => hoverStyles(props)[props.variant]}
  }

  :active:not(:disabled) {
    ${props => activeStyles(props)[props.variant]}
  }

  :focus {
    outline: none;
  }
`;

OutlineButton.defaultProps = {
  variant: 'outline.uranus',
  buttonSize: 'medium',
};

export default OutlineButton;
