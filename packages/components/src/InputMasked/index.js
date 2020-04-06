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
  mask,
  maskType,
  maskPlaceholder,
  thousandSeparator,
  decimalSeparator,
  decimalScale,
  ...inputProps
}) => {
  return maskType === maskTypes.currency ? (
    <NumberFormat
      {...inputProps}
      customInput={InputText}
      placeholder={inputProps.placeholder ? inputProps.placeholder : maskType.placeholder}
      thousandSeparator={thousandSeparator}
      decimalSeparator={decimalSeparator}
      decimalScale={decimalScale}
    />
  ) : (
    <InputMask mask={maskType ? maskType.mask : mask} maskPlaceholder={maskPlaceholder}>
      <InputText
        {...inputProps}
        placeholder={inputProps.placeholder ? inputProps.placeholder : maskType.placeholder}
      />
    </InputMask>
  );
};

InputMasked.displayName = 'InputMasked';

InputMasked.defaultProps = {
  mask: '',
  maskPlaceholder: '',
  thousandSeparator: '.',
  decimalSeparator: ',',
  decimalScale: 2,
  ...InputText.defaultProps,
  noAnimate: true,
};

InputMasked.propTypes = {
  mask: PropTypes.string,
  maskType: PropTypes.oneOf([maskTypes.cpf, maskTypes.currency, maskTypes.date]),
  maskPlaceholder: PropTypes.string,
  thousandSeparator: PropTypes.string,
  decimalSeparator: PropTypes.string,
  decimalScale: PropTypes.number,
  ...InputText.propTypes,
};

export default InputMasked;
