import PropTypes from 'prop-types';
import React from 'react';
import InputMask from 'react-input-mask';
import NumberFormat from 'react-number-format';
import InputText from '../InputText';

export const maskTypes = {
  cpf: {
    mask: '999.999.999-99',
    placeholder: '000.000.000-00',
  },
  currency: {
    mask: '',
    placeholder: '0,00',
  },
  date: {
    mask: '99/99/9999',
    placeholder: '00/00/0000',
  },
};

const InputMasked = ({
  inputId,
  labelId,
  labelText,
  isValidated,
  isInvalid,
  errorMessage,
  labelProps,
  noAnimate,
  placeholder,
  mask,
  maskType,
  maskPlaceholder,
  rest,
}) => {
  const commonProps = {
    inputId,
    labelId,
    labelText,
    isValidated,
    isInvalid,
    errorMessage,
    labelProps,
    rest,
    noAnimate,
  };

  return maskType === maskTypes.currency ? (
    <NumberFormat
      {...commonProps}
      customInput={InputText}
      placeholder={maskType.placeholder}
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={2}
    />
  ) : (
    <InputMask mask={maskType ? maskType.mask : mask} maskPlaceholder={maskPlaceholder}>
      <InputText {...commonProps} placeholder={maskType ? maskType.placeholder : placeholder} />
    </InputMask>
  );
};

InputMasked.displayName = 'InputMasked';

InputMasked.defaultProps = {
  ...InputText.defaultProps,
  noAnimate: true,
  mask: '',
  maskPlaceholder: '',
};

InputMasked.propTypes = {
  ...InputText.propTypes,
  mask: PropTypes.string,
  maskType: PropTypes.oneOf([maskTypes.cpf, maskTypes.currency, maskTypes.date]),
  maskPlaceholder: PropTypes.string,
};

export default InputMasked;
