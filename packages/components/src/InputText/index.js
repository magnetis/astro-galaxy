import { IconAlert, IconCircleCheck } from '@magnetis/astro-galaxy-icons';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { layout, space } from 'styled-system';

export const inputSizes = {
  medium: 'medium',
  large: 'large',
};

const inputSizeStyles = props => {
  if (props.inputSize === inputSizes.large) {
    return {
      label: {
        initial: `
          font-size: ${props.theme.fontSizes.texts.large};
          padding: 0.6em;
        `,
        focus: `transform: translate(8px, -3px) scale(0.6);`,
      },
      input: `font-size: ${props.theme.fontSizes.texts.large};`,
    };
  }

  return {
    label: {
      initial: `font-size: ${props.theme.fontSizes.texts.medium};`,
      focus: `transform: translate(3px, -6px) scale(0.8);`,
    },
  };
};

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
  const iconPadding = props.theme.space[6];

  if (props.isValidated && !props.disabled) {
    return `border-color: ${props.theme.colors.earth400}; padding-right: ${iconPadding}px;`;
  }

  if (props.isInvalid && !props.disabled) {
    return `border-color: ${props.theme.colors.mars500}; padding-right: ${iconPadding}px;`;
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
  ${props => inputSizeStyles(props).label.initial};
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
  ${props => inputSizeStyles(props).input};

  &::placeholder {
    color: transparent;
  }

  &:focus::placeholder,
  &.--no-animate::placeholder {
    color: ${props => props.theme.colors.moon300};
  }

  &:focus {
    outline: none;

    ${props => inputValidationStyles({ ...props, defaultColor: props.theme.colors.moon500 })};
  }

  &:focus + label {
    ${props => labelValidationStyles({ ...props, defaultColor: props.theme.colors.uranus500 })};
  }

  &:focus,
  &:not(:placeholder-shown),
  &.--no-animate {
    & + label {
      font-weight: 700;

      ${props => inputSizeStyles(props).label.focus};
    }
    ${props => inputValidationStyles({ ...props, defaultColor: props.theme.colors.uranus500 })};
  }

  & + label {
    left: 0;
    position: absolute;
    top: 0;
    transition: transform 0.25s, opacity 0.25s ease-in-out;
    transform-origin: 0 0;
  }
`;

const iconStyles = inputSize => ({
  position: 'absolute',
  top: `${inputSize === inputSizes.large ? 16 : 10}px`,
  right: '8px',
});

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
  labelProps,
  noAnimate,
  className,
  inputSize,
  ...rest
}) => (
  <>
    <InputWrapper>
      <InputField
        type="text"
        id={inputId}
        aria-labelledby={labelId}
        placeholder={labelText}
        isValidated={isValidated}
        isInvalid={isInvalid}
        inputSize={inputSize}
        className={`${className} ${noAnimate ? '--no-animate' : ''}`}
        {...rest}
      />
      <InputLabel
        id={labelId}
        htmlFor={inputId}
        isValidated={isValidated}
        isInvalid={isInvalid}
        inputSize={inputSize}
        {...labelProps}>
        {labelText}
      </InputLabel>
      {isValidated && (
        <IconCircleCheck color="earth400" size="32" style={{ ...iconStyles(inputSize) }} />
      )}
      {isInvalid && <IconAlert color="mars500" size="32" style={{ ...iconStyles(inputSize) }} />}
      {isInvalid && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputWrapper>
  </>
);

InputText.displayName = 'InputText';
ErrorMessage.displayName = 'ErrorMessage';

InputText.defaultProps = {
  labelText: 'Standard',
  isValidated: false,
  isInvalid: false,
  noAnimate: false,
  labelProps: {},
  className: '',
  inputSize: inputSizes.medium,
};

InputText.propTypes = {
  inputId: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  isValidated: PropTypes.bool,
  isInvalid: PropTypes.bool,
  noAnimate: PropTypes.bool,
  errorMessage: PropTypes.string,
  labelProps: PropTypes.object,
  inputSize: PropTypes.oneOf([inputSizes.medium, inputSizes.large]),
};

export default InputText;
