import { IconInputDash, IconInputPlus } from '@magnetis/astro-galaxy-icons';
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
  buttonProps,
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
          disabled={inputProps.disabled}
          {...buttonProps.decrementButtonProps}>
          <IconInputDash />
        </IconGhostButton>
        <IconGhostButton
          onClick={onIncrement}
          buttonSize={buttonSize}
          variant={buttonVariant}
          disabled={inputProps.disabled}
          {...buttonProps.incrementButtonProps}>
          <IconInputPlus />
        </IconGhostButton>
      </InputControlButtons>
    </InputControlContainer>
  );
};

InputControl.displayName = 'InputControl';

InputControl.defaultProps = {
  buttonProps: {
    incrementButtonProps: {},
    decrementButtonProps: {},
  },
};

InputControl.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  buttonProps: PropTypes.shape({
    incrementButtonProps: PropTypes.object,
    decrementButtonProps: PropTypes.object,
  }),
  ...InputMasked.propTypes,
};
export default InputControl;
