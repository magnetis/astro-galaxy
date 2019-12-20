import styled from 'styled-components';
import { space, layout } from 'styled-system';
import PropTypes from 'prop-types';

const RadioWrapper = styled.div`
  display: flex;

  ${props =>
    props.center &&
    `
    align-items: center;
  `};

  ${layout};
  ${space};
`;

const Radio = styled.input.attrs(props => ({
  type: 'radio',
}))`
  position: absolute;
  margin-top: 4px;
  opacity: 0;
  cursor: pointer;
  width: ${props => props.theme.sizes[2]};
  height: ${props => props.theme.sizes[2]};

  :checked ~ span::before {
    border: 5px solid ${props => props.theme.colors.uranus500};
  }

  :focus ~ span::before {
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }

  :hover ~ span::before {
    border-color: ${props => props.theme.colors.uranus500};
  }

  :disabled {
    cursor: not-allowed;
  }

  :disabled ~ span::before {
    cursor: not-allowed;
    border-color: ${props => props.theme.colors.moon200};
  }

  :disabled ~ label {
    cursor: not-allowed;
    color: ${props => props.theme.colors.moon200};
  }
`;

const RadioShape = styled.span`
  ::before {
    display: inline-block;
    content: '';
    margin-top: 4px;
    border: 2px solid ${props => props.theme.colors.moon500};
    border-radius: 100%;
    background-color: ${props => props.theme.colors.space100};
    width: ${props => props.theme.sizes[2]};
    height: ${props => props.theme.sizes[2]};
  }
`;

RadioWrapper.displayName = 'RadioWrapper';
RadioShape.displayName = 'RadioShape';
Radio.displayName = 'Radio';

RadioWrapper.propTypes = {
  center: PropTypes.bool,
};

export { RadioWrapper, Radio, RadioShape };
