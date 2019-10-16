const warningTemplate = require('./warning-template');

const iconTemplate = () => `
  ${warningTemplate}
import React from 'react';
import styled from 'styled-components';
import { color, space } from 'styled-system';

const IconContainer = styled.svg(
  {
    fill: 'currentcolor',
  },
  color,
  space,
);

const IconComponent = ({ content, viewBox, size, ...props }) => (
  <IconContainer width={size} height={size} viewBox={viewBox} {...props}>
    {content}
  </IconContainer>
);

IconComponent.defaultProps = {
  size: 24,
  color: 'black',
};

export default IconComponent;
`;

module.exports = iconTemplate;
