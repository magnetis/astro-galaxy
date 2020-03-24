import styled from 'styled-components';
import InputText from '../InputText';

const InputGhost = styled(InputText)`
  background-color: transparent;
  border-color: ${props => props.theme.colors.space100};
  color: ${props => props.theme.colors.space100};

  &[disabled] {
    background-color: #ffffff20;
  }

  &:focus,
  &:not(:placeholder-shown) {
    border-color: ${props => props.theme.colors.space100};
  }

  ~ label,
  ~ div,
  &:focus,
  &:focus + label {
    color: ${props => props.theme.colors.space100};
  }

  ~ svg {
    fill: ${props => props.theme.colors.space100};
  }
`;

InputGhost.displayName = 'InputGhost';

export default InputGhost;
