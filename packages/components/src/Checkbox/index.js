import styled from 'styled-components';
import { space, layout } from 'styled-system';
import PropTypes from 'prop-types';

const squareSize = '16px';

const CheckboxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  > input[type='checkbox']:disabled ~ label {
    color: ${props => props.theme.colors.moon200};
    cursor: not-allowed;
  }

  ${layout};
  ${space};
`;

const Checkbox = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  position: absolute;
  z-index: ${props => props.theme.zIndices[1]};
  width: ${squareSize};
  height: ${squareSize};
  cursor: pointer;
  opacity: 0;

  :disabled ~ label {
    color: ${props => props.theme.colors.moon200};
    cursor: not-allowed;
  }

  :focus ~ span::before {
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }

  :checked ~ span::before {
    background-color: ${props => props.theme.colors.uranus500};
    border-color: ${props => props.theme.colors.uranus500};
  }

  :disabled ~ span::before {
    border-color: ${props => props.theme.colors.moon200};
  }

  :checked:disabled ~ span::before {
    background-color: ${props => props.theme.colors.moon200};
  }

  :disabled {
    cursor: not-allowed;
  }

  :hover:not(:disabled) ~ span::before {
    border-color: ${props => props.theme.colors.uranus500};
  }

  ${props =>
    props.indeterminate &&
    `
      ~ span::after {
        top: 11px;
        left: 4px;
        width: 8px;
        border-left: 0;
        transform: rotate(-180deg);
      }
      :disabled ~ span::before {
        background-color: ${props.theme.colors.moon200};
      }
    `};
`;

const CheckboxShape = styled.span`
  ::before {
    display: inline-block;
    width: ${squareSize};
    height: ${squareSize};
    content: '';
    border: 2px solid ${props => props.theme.colors.moon500};
    border-radius: 2px;
    position: relative;
    top: 2px;
  }
  ::after {
    position: absolute;
    top: 7px;
    left: 3px;
    width: 10px;
    height: 6px;
    color: ${props => props.theme.colors.space100};
    content: '';
    border-bottom: 2px solid;
    border-left: 2px solid;
    transform: rotate(-45deg);
  }
`;

CheckboxWrapper.displayName = 'CheckboxWrapper';
CheckboxShape.displayName = 'CheckboxShape';
Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  indeterminate: PropTypes.bool,
};

export { CheckboxWrapper, Checkbox, CheckboxShape };
