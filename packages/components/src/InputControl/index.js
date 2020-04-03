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

const InputControl = ({
  onIncrement,
  onDecrement,
  incrementLabel,
  decrementLabel,
  ...inputProps
}) => {
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
          aria-label={decrementLabel}
          title={decrementLabel}
          disabled={inputProps.disabled}>
          <IconCircleLess />
        </IconGhostButton>
        <IconGhostButton
          onClick={onIncrement}
          buttonSize={buttonSize}
          variant={buttonVariant}
          aria-label={incrementLabel}
          title={incrementLabel}
          disabled={inputProps.disabled}>
          <IconCircleMore />
        </IconGhostButton>
      </InputControlButtons>
    </InputControlContainer>
  );
};

InputControl.displayName = 'InputControl';

InputControl.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  incrementLabel: PropTypes.string.isRequired,
  decrementLabel: PropTypes.string.isRequired,
  ...InputMasked.propTypes,
};
export default InputControl;
