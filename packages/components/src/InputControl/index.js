import { IconCircleLess, IconCircleMore } from '@magnetis/astro-galaxy-icons';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import IconGhostButton from '../IconGhostButton';
import InputMasked, { maskTypes } from '../InputMasked';
import { inputSizes } from '../InputText';

const InputControlContainer = styled.div`
  position: relative;
`;

const InputControlButtons = styled.div`
  position: absolute;
  right: ${props => props.theme.space[1]}px;
  top: 5%;
`;

const InputControl = ({ onIncrement, onDecrement, ...inputProps }) => {
  const buttonSize =
    inputProps.inputSize === inputSizes.large ? inputSizes.large : inputSizes.medium;
  let buttonVariant = 'ghost.moon';

  if (inputProps.isValidated) {
    buttonVariant = 'ghost.earth';
  }

  if (inputProps.isInvalid) {
    buttonVariant = 'ghost.mars';
  }

  return (
    <InputControlContainer>
      <InputMasked maskType={maskTypes.currency} {...inputProps} displayValidationIcon={false} />
      <InputControlButtons>
        <IconGhostButton
          onClick={onDecrement}
          buttonSize={buttonSize}
          variant={buttonVariant}
          disabled={inputProps.disabled}>
          <IconCircleLess />
        </IconGhostButton>
        <IconGhostButton
          onClick={onIncrement}
          buttonSize={buttonSize}
          variant={buttonVariant}
          disabled={inputProps.disabled}>
          <IconCircleMore />
        </IconGhostButton>
      </InputControlButtons>
    </InputControlContainer>
  );
};

InputControl.displayName = 'InputControl';

InputControl.propTypes = {
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  ...InputMasked.propTypes,
};
export default InputControl;
