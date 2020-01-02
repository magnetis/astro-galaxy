import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';

const TOGGLE_BASE_WIDTH = '50px';
const TOGGLE_BASE_HEIGHT = '30px';
const TOGGLE_CIRCLE_SIZE = '28px';

const ToggleButton = styled.button`
  color: ${props => props.theme.colors.moon900};
  background-color: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  font: ${props => props.theme.fonts.secondary};

  /**
    Allow us to use custom margin or padding via props if needed.
    For more info check styled-system docs: https://styled-system.com/theme-specification
  */
  ${space};

  span {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin-left: 8px;

    &:before {
      display: block;
      width: ${TOGGLE_BASE_WIDTH};
      height: ${TOGGLE_BASE_HEIGHT};
      content: '';
      background-color: ${props => props.theme.colors.moon400};
      border-radius: ${TOGGLE_CIRCLE_SIZE};
      transition: background-color 0.3s ease;
    }

    &:after {
      position: absolute;
      top: 1px;
      left: 1px;
      display: block;
      width: ${TOGGLE_CIRCLE_SIZE};
      height: ${TOGGLE_CIRCLE_SIZE};
      visibility: visible;
      content: '';
      background-color: ${props => props.theme.colors.space100};
      border-radius: ${TOGGLE_CIRCLE_SIZE};
      transition: left 0.3s ease;
    }
  }

  &[aria-pressed] {
    :not(:disabled):hover {
      & span {
        &:before {
          background-color: ${props => props.theme.colors.moon300};
        }
      }
    }
  }

  &[aria-pressed='true'] {
    & span {
      &:before {
        background-color: ${props => props.theme.colors.uranus500};
      }

      &:after {
        left: 21px;
      }
    }

    :not(:disabled):hover {
      & span {
        &:before {
          background-color: ${props => props.theme.colors.uranus400};
        }
      }
    }
  }

  :disabled {
    color: ${props => props.theme.colors.moon200};
    cursor: not-allowed;

    & span {
      &:before {
        background-color: ${props => props.theme.colors.moon200};
      }
    }
  }

  :focus {
    outline: none;

    & span {
      &:before {
        box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
      }
    }
  }
`;

ToggleButton.displayName = 'ToggleButton';

const Toggle = ({ label, isToggled, ...rest }) => {
  return (
    <ToggleButton type="button" aria-pressed={isToggled} {...rest}>
      {label}
      <span aria-hidden="true" />
    </ToggleButton>
  );
};

Toggle.propTypes = {
  label: PropTypes.string.isRequired,
  isToggled: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

Toggle.defaultProps = {
  isToggled: false,
};

export default Toggle;
