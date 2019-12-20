import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';

const iconColor = props => ({
  'primary.uranus': `
    color: ${props.theme.colors.space100};
  `,
  'primary.earth': `
    color: ${props.theme.colors.moon900};
  `,
  'primary.venus': `
    color: ${props.theme.colors.space100};
  `,
  'primary.mars': `
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

export const iconlabelMargin = props => {
  if (props.iconlabel && !props.iconlabelRight) {
    return '-4px 9px -3px 0';
  }

  if (props.iconlabel && props.iconlabelRight) {
    return '-4px 0 -3px 9px';
  }

  return '-4px 0 -3px';
};

const IconButton = styled(Button)`
  & svg {
    transition: all 0.3s ease;
    vertical-align: middle;
    margin: ${iconlabelMargin};
    ${props => iconColor(props)[props.variant]};
    ${props => iconSize()[props.buttonSize]};
  }

  ${props => !props.iconlabel && buttonPadding()[props.buttonSize]};
`;

IconButton.displayName = 'IconButton';

IconButton.propTypes = {
  variant: PropTypes.oneOf(['primary.uranus', 'primary.earth', 'primary.venus', 'primary.mars']),
  buttonSize: PropTypes.oneOf(['small', 'medium', 'large']),
  iconlabel: PropTypes.bool,
};

IconButton.defaultProps = {
  variant: 'primary.uranus',
  buttonSize: 'medium',
  iconlabel: false,
};

export default IconButton;
