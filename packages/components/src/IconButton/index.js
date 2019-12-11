import styled from 'styled-components';
import { space } from 'styled-system';
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

const IconButton = styled(Button)`
  & svg {
    margin: ${props => (props.iconlabel ? '-4px 9px -3px 0' : '-4px 0 -3px')};
    transition: all 0.3s ease;
    vertical-align: middle;
    ${props => iconColor(props)[props.variant]};
    ${props => iconSize()[props.buttonSize]};
  }

  ${props => !props.iconlabel && buttonPadding()[props.buttonSize]};
`;

IconButton.displayName = 'IconButton';

IconButton.propTypes = {};

IconButton.defaultProps = {
  variant: 'primary.uranus',
  buttonSize: 'medium',
  iconlabel: false,
};

export default IconButton;
