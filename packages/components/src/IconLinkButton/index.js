import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color, space, border, layout, fontSize, typography } from 'styled-system';
import { font, buttonSizes } from '@magnetis/astro-galaxy-core';
import { iconlabelMargin } from '../IconButton';

const IconLinkButton = styled.button`
  ${font};
  ${buttonSizes};

  display: inline-block;
  overflow: hidden;
  color: ${props => props.theme.colors.space100};
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 0;
  transition: all 0.3s ease;
  ${props => props.bold && 'font-weight: 700;'};

  & svg {
    margin: ${iconlabelMargin};
    vertical-align: middle;
    color: ${props => props.theme.colors.space100};
    transition: all 0.3s ease;
  }

  :hover:not(:disabled),
  :focus:not(:disabled) {
    color: ${props => props.theme.colors.uranus500};
    outline: none;

    & svg {
      color: ${props => props.theme.colors.uranus500};
    }
  }

  :active:not(:disabled) {
    color: ${props => props.theme.colors.uranus800};

    & svg {
      color: ${props => props.theme.colors.uranus800};
    }
  }

  :disabled {
    color: ${props => props.theme.colors.moon200};
    cursor: not-allowed;

    & svg {
      color: ${props => props.theme.colors.moon200};
    }
  }
`;

IconLinkButton.displayName = 'IconLinkButton';

IconLinkButton.defaultProps = {
  bold: false,
  iconlabel: true,
  iconlabelRight: false,
  font: 'secondary',
  buttonSize: 'medium',
};

IconLinkButton.propTypes = {
  bold: PropTypes.bool,
  iconlabel: PropTypes.bool,
  iconlabelRight: PropTypes.bool,
  buttonSize: PropTypes.string,
  font: PropTypes.string,
  ...color.propTypes,
  ...space.propTypes,
  ...border.propTypes,
  ...layout.propTypes,
  ...fontSize.propTypes,
  ...typography.propTypes,
};

export default IconLinkButton;
