import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { space, layout } from 'styled-system';
import { IconCircleCheck, IconAlert } from '@magnetis/astro-galaxy-icons';

const labelValidationStyles = props => {
  if (props.isValidated && !props.disabled) {
    return `color: ${props.theme.colors.earth400}`;
  }

  if (props.isInvalid && !props.disabled) {
    return `color: ${props.theme.colors.mars500}`;
  }

  if (props.disabled) {
    return `
      color: ${props.theme.colors.moon300}; 
      cursor: not-allowed;
    `;
  }

  return `color: ${props.defaultColor}`;
};

const inputValidationStyles = props => {
  if (props.isValidated && !props.disabled) {
    return `border-color: ${props.theme.colors.earth400}`;
  }

  if (props.isInvalid && !props.disabled) {
    return `border-color: ${props.theme.colors.mars500}`;
  }

  if (props.disabled) {
    return `
      color: ${props.theme.colors.moon300}; 
      cursor: not-allowed;
      background-color: ${props.theme.colors.moon100};
      border-color:  ${props.theme.colors.moon200};
    `;
  }

  return `border-color: ${props.defaultColor}`;
};

const InputWrapper = styled.fieldset`
  border: 0;
  padding: 0;
  position: relative;

  ${space};
  ${layout};
`;

const InputLabel = styled.label`
  font: ${props => props.theme.fonts.secondary};
  height: 4em;
  padding: 1em;
  pointer-events: none;
  user-select: none;

  ${props => labelValidationStyles({ ...props, defaultColor: props.theme.colors.moon400 })};
`;

const InputField = styled.input`
  background-color: ${props => props.theme.colors.space100};
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  color: ${props => props.theme.colors.moon900};
  font: ${props => props.theme.fonts.secondary};
  padding: 25px 16px 5px;
  position: relative;
  width: 100%;

  ${props => inputValidationStyles({ ...props, defaultColor: props.theme.colors.moon500 })};

  &::placeholder {
    color: transparent;
  }

  &:focus {
    outline: none;

    ${props => inputValidationStyles({ ...props, defaultColor: props.theme.colors.moon500 })};
  }

  &:focus + ${InputLabel} {
    ${props => labelValidationStyles({ ...props, defaultColor: props.theme.colors.uranus500 })};
  }

  &:focus,
  &:not(:placeholder-shown) {
    & + ${InputLabel} {
      font-weight: 700;
      transform: translate(5%, -10%) scale(0.8);
    }
  }

  & + ${InputLabel} {
    left: 0;
    position: absolute;
    top: 0;
    transition: transform 0.25s, opacity 0.25s ease-in-out;
    transform-origin: 0 0;
  }
`;

const iconStyles = css`
  position: absolute;
  top: 12px;
  right: 8px;
`;

const StyledIconCircleCheck = styled(IconCircleCheck)`
  ${iconStyles}
`;

const StyledIconIconAlert = styled(IconAlert)`
  ${iconStyles}
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.mars500};
  font: ${props => props.theme.fonts.secondary};
  font-size: ${props => props.theme.fontSizes.texts.verySmall};
  margin: 4px 16px;
`;

const InputText = ({
  inputId,
  labelId,
  labelText,
  isValidated,
  isInvalid,
  errorMessage,
  ...rest
}) => (
  <>
    <InputWrapper>
      <InputField
        type="text"
        id={inputId}
        aria-labelledby={labelId}
        placeholder={labelText}
        {...rest}
        isValidated={isValidated}
        isInvalid={isInvalid}
      />
      <InputLabel id={labelId} htmlFor={inputId} isValidated={isValidated} isInvalid={isInvalid}>
        {labelText}
      </InputLabel>
      {isValidated && <StyledIconCircleCheck color="earth400" size="32" />}
      {isInvalid && <StyledIconIconAlert color="mars500" size="32" />}
      {isInvalid && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputWrapper>
  </>
);

InputText.displayName = 'InputText';

InputText.defaultProps = {
  labelText: 'Standard',
  isValidated: false,
  isInvalid: false,
  disabled: false,
};

InputText.propTypes = {
  inputId: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  disabled: PropTypes.bool,
  isValidated: PropTypes.bool,
  isInvalid: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default InputText;
