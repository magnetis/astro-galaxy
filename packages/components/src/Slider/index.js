import styled from 'styled-components';
import PropTypes from 'prop-types';
import { space } from 'styled-system';

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

// -ms-track
// -moz-range-track
// -webkit-slider-runnable-track
function trackStyle(trackName, props) {
  return `&::${trackName} {
    display: flex;
    height: 5px;
    background-color: ${props.theme.colors.moon300};
    background-image: ${
      props.fullFill
        ? `${props.theme.gradients.cartwheel};`
        : `linear-gradient(
          to right,
          ${props.theme.colors.uranus500},
          ${props.normalizedValue}%,
          transparent ${props.normalizedValue}%);`
    }
    border-radius: 4px;
    align-items: center;
  }
  
  &:disabled${trackName} {
    cursor: not-allowed;
    background-color: ${props.theme.colors.moon200};
    background-image: none;
  }
  ${props.fullFill ? `` : ''}
  `;
}

// -ms-thumb
// -moz-range-thumb
// -webkit-slider-thumb
function thumbStyle(thumbName, props) {
  return `&::${thumbName} {
    width: 28px;
    height: 28px;
    cursor: pointer;
    background-color: ${props.theme.colors.space100};
    border-radius: 100%;
    box-shadow: 0 1px 4px 0 rgba(135, 135, 135, 0.5);
    transition: all 0.3s ease;
    appearance: none;
    border: none;
  }
  
  &:not(:disabled)::${thumbName}:hover,
  &:focus::${thumbName} {
    width: 36px;
    height: 36px;
  }

  &:not(:disabled)::${thumbName}:active {
    width: 40px;
    height: 40px;
  }
  
  &:disabled::${thumbName} {
    display: none;
    visibility: hidden;
  }
  `;
}

const SliderWrapper = styled.div``;

const SliderInput = styled.input.attrs(props => ({
  type: 'range',
  normalizedValue: (normalize(props.value, props.min, props.max) * 100).toFixed(3),
}))`
  width: 100%;
  outline: none;
  appearance: none;

  &:disabled {
    cursor: not-allowed;
    background-color: transparent;
  }

  /* Chrome - always replicate styles for each browser, it's the only way :( */

  ${props => trackStyle('-webkit-slider-runnable-track', props)}
  ${props => thumbStyle('-webkit-slider-thumb', props)}

  /* Firefox - always replicate styles for each browser, it's the only way :( */

  ${props => trackStyle('-moz-range-track', props)}
  ${props => thumbStyle('-moz-range-thumb', props)}

  /* IE - always replicate styles for each browser, it's the only way :( */

  ${props => trackStyle('-ms-track', props)}
  ${props => thumbStyle('-ms-thumb', props)}
`;

SliderInput.displayName = 'Slider';

SliderInput.propTypes = {
  fullFill: PropTypes.bool,
  onChange: PropTypes.func,
};

SliderInput.defaultProps = {
  min: 0,
  max: 100,
};

export default SliderInput;
