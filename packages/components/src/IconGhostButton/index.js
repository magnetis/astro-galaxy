import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconButton from '../IconButton';

const iconColor = props => ({
  'ghost.uranus': `
    color: ${props.theme.colors.uranus500};
  `,
  'ghost.earth': `
    color: ${props.theme.colors.earth600};
  `,
  'ghost.venus': `
    color: ${props.theme.colors.venus400};
  `,
  'ghost.mars': `
    color: ${props.theme.colors.mars500};
  `,
});

const buttonHoverStyles = props => ({
  'ghost.uranus': `
    color: ${props.theme.colors.uranus400};
  `,
  'ghost.earth': `
    color: ${props.theme.colors.earth300};
  `,
  'ghost.venus': `
    color: ${props.theme.colors.venus300};
  `,
  'ghost.mars': `
    color: ${props.theme.colors.mars400};
  `,
});

const buttonActiveStyles = props => ({
  'ghost.uranus': `
    color: ${props.theme.colors.uranus600};
  `,
  'ghost.earth': `
    color: ${props.theme.colors.earth800};
  `,
  'ghost.venus': `
    color: ${props.theme.colors.venus500};
  `,
  'ghost.mars': `
    color: ${props.theme.colors.mars600};
  `,
});

const IconGhostButton = styled(IconButton)`
  & svg {
    ${props => iconColor(props)[props.variant]};
  }

  & :disabled {
    background-color: transparent;
    border-color: transparent;
    color: ${props => props.theme.colors.moon200};

    svg {
      color: ${props => props.theme.colors.moon200};
    }
  }

  :hover:not(:disabled) svg,
  :focus:not(:disabled) svg {
    ${props => buttonHoverStyles(props)[props.variant]};
  }

  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: ${props => props.theme.colors.moon100};
    border-color: ${props => props.theme.colors.moon100};
    ${props => buttonHoverStyles(props)[props.variant]};
  }

  :active:not(:disabled) {
    background-color: ${props => props.theme.colors.moon200};
    border-color: ${props => props.theme.colors.moon200};
    ${props => buttonActiveStyles(props)[props.variant]}
  }
`;

IconGhostButton.displayName = 'IconGhostButton';

IconGhostButton.propTypes = {
  variant: PropTypes.oneOf(['ghost.uranus', 'ghost.earth', 'ghost.venus', 'ghost.mars']),
  buttonSize: PropTypes.oneOf(['small', 'medium', 'large']),
  iconlabel: PropTypes.bool,
};

IconGhostButton.defaultProps = {
  variant: 'ghost.uranus',
  buttonSize: 'medium',
  iconlabel: false,
};

export default IconGhostButton;
