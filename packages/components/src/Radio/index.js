import React from 'react';
import styled from 'styled-components';
import { color, space, layout, fontSize, typography } from 'styled-system';
import { font, buttonSizes } from 'astro-core/src/custom-props';

const RadioWrapper = styled.div`
  display: flex;

  ${layout};
  ${space};
`;

const Radio = styled.input.attrs(props => ({
  type: 'radio',
}))`
  position: absolute;
  margin-top: 4px;
  opacity: 0;
  cursor: pointer;

  :checked ~ span::before {
    border: 5px solid ${props => props.theme.colors.uranus500};
  }

  :focus ~ span::before {
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }

  :hover ~ span::before {
    border-color: ${props => props.theme.colors.uranus500};
  }

  :disabled ~ span::before {
    cursor: not-allowed;
    border-color: ${props => props.theme.colors.moon200};
  }

  ${layout}
`;

Radio.defaultProps = {
  size: 2, // Same as width: 2, height: 2
};

const RadioShape = styled.span`
  ::before {
    display: inline-block;
    content: '';
    margin-top: 4px;
    border: 2px solid ${props => props.theme.colors.moon500};
    border-radius: 100%;
    background-color: ${props => props.theme.colors.space100};

    ${layout}
  }
`;

RadioShape.defaultProps = {
  size: 2, // Same as width: 2, height: 2
};

export { RadioWrapper, Radio, RadioShape };
