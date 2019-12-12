import PropTypes from 'prop-types';
import styled from 'styled-components';
import OutlineButton from '../OutlineButton';

const iconColor = props => ({
  'outline.uranus': `
    color: ${props.theme.colors.uranus500};
  `,
  'outline.earth': `
    color: ${props.theme.colors.earth600};
  `,
  'outline.venus': `
    color: ${props.theme.colors.venus400};
  `,
  'outline.mars': `
    color: ${props.theme.colors.mars500};
  `,
});

const hoverStyles = props => ({
  'outline.uranus': `
    color: ${props.theme.colors.space100};
  `,
  'outline.earth': `
    color: ${props.theme.colors.moon900};
  `,
  'outline.venus': `
    color: ${props.theme.colors.space100};
  `,
  'outline.mars': `
    color: ${props.theme.colors.space100};
  `,
});

const iconSize = () => ({
  small: `
    width: 24px;
    height: 24px;
  `,
  medium: `
    width: 32px;
    height: 32px;
  `,
  large: `
    width: 40px;
    height: 40px;
  `,
});

const buttonPadding = () => ({
  small: `
    padding: 5px 2px;
  `,
  medium: `
    padding: 8px 6px;
  `,
  large: `
    padding: 11px 9px;
  `,
});

const iconlabelMargin = props => {
  if (props.iconlabel && !props.iconlabelRight) {
    return '-4px 9px -3px 0';
  }

  if (props.iconlabel && props.iconlabelRight) {
    return '-4px 0 -3px 9px';
  }

  return '-4px 0 -3px';
};

const IconOutlineButton = styled(OutlineButton)`
  & svg {
    transition: all 0.3s ease;
    vertical-align: middle;
    margin: ${iconlabelMargin};
    ${props => iconColor(props)[props.variant]};
    ${props => iconSize()[props.buttonSize]};
  }

  ${props => !props.iconlabel && buttonPadding()[props.buttonSize]};

  & :disabled {
    svg {
      color: ${props => props.theme.colors.moon200};
    }
  }

  :hover:not(:disabled) svg,
  :focus:not(:disabled) svg,
  :active:not(:disabled) svg {
    ${props => hoverStyles(props)[props.variant]}
  }
`;

IconOutlineButton.displayName = 'IconOutlineButton';

IconOutlineButton.propTypes = {
  variant: PropTypes.oneOf(['outline.uranus', 'outline.earth', 'outline.venus', 'outline.mars']),
  buttonSize: PropTypes.oneOf(['small', 'medium', 'large']),
  iconlabel: PropTypes.bool,
  iconlabelRight: PropTypes.bool,
};

IconOutlineButton.defaultProps = {
  variant: 'outline.uranus',
  buttonSize: 'medium',
  iconlabel: false,
  iconlabelRight: false,
};

export default IconOutlineButton;
