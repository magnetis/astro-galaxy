import styled from 'styled-components';
import { color, space } from 'styled-system';
import { font } from '@magnetis/astro-galaxy-core';

const Label = styled.label`
  cursor: pointer;
  font: ${props => props.theme.fonts.secondary};

  ${font};
  ${space};
  ${color};
`;

Label.defaultProps = {
  paddingLeft: 1,
};

Label.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
};

export default Label;
