import styled from 'styled-components';
import PropTypes from 'prop-types';
import { space } from 'styled-system';

const trackHeight = 5;

/**
 * Scales an number between 0 and 1 by given numeric range.
 * Also know as min-max normalization.
 *
 * @param {number} value The value
 * @param {number} min Minium
 * @param {number} max Maximum
 * @return {number} The normalized number
 */
function normalize(value, min, max) {
  return (value - min) / (max - min);
}

const Slider = styled.input.attrs(props => ({
  type: 'range',
  normalizedValue: (normalize(props.value, props.min, props.max) * 100).toFixed(3),
}))`
  width: 100%;
  outline: none;
  appearance: none;

  /* Chrome - always replicate styles for each browser, it's the only way :( */

  &::-webkit-slider-runnable-track {
    display: flex;
    height: 5px;
    background-color: var(--color-moon-300);
    background-image: linear-gradient(
      to right,
      ${props => props.theme.colors.uranus500} ${props => props.value}%,
      transparent ${props => props.value}%
    );
    border-radius: 4px;
    align-items: center;
  }

  &::-webkit-slider-thumb {
    width: 28px;
    height: 28px;
    cursor: pointer;
    background-color: var(--color-space-100);
    border-radius: 100%;
    box-shadow: 0 1px 4px 0 rgba(135, 135, 135, 0.5);
    transition: all 0.3s ease;
    appearance: none;
  }

  &:not(:disabled)::-webkit-slider-thumb:hover,
  &:focus::-webkit-slider-thumb {
    width: 36px;
    height: 36px;
  }

  &:not(:disabled)::-webkit-slider-thumb:active {
    width: 40px;
    height: 40px;
  }

  &:disabled::-webkit-slider-runnable-track {
    cursor: not-allowed;
    background-color: var(--color-moon-200);
    background-image: none;
  }

  &:disabled::-webkit-slider-thumb {
    display: none;
  }

  /* Firefox - always replicate styles for each browser, it's the only way :(
      Some styles below are slightly different from Chrome */

  &::-moz-range-track {
    display: flex;
    height: 5px;
    background-color: ${props => props.theme.colors.moon300};
    background-image: linear-gradient(
      to right,
      ${props => props.theme.colors.uranus500},
      ${props => props.normalizedValue}%,
      transparent ${props => props.normalizedValue}%
    );
    border-radius: 4px;
    align-items: center;
  }

  .a-slider.a-slider--full > input[type='range']::-moz-range-track {
    background-image: var(--gradient-cartwheel);
  }

  &::-moz-range-thumb {
    width: 28px;
    height: 28px;
    cursor: pointer;
    background-color: ${props => props.theme.colors.space100};
    border: none;
    border-radius: 100%;
    box-shadow: 0 1px 4px 0 rgba(135, 135, 135, 0.5);
    transition: all 0.3s ease;
    appearance: none;
  }
`;

Slider.displayName = 'Slider';

Slider.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
};

Slider.defaultProps = {
  value: 0,
  min: 0,
  max: 100,
};

export default Slider;
