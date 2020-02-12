import styled from 'styled-components';
import { fontSize, typography } from 'styled-system';
import { font } from '@magnetis/astro-galaxy-core';

const Link = styled.a`
  color: ${props => props.theme.colors.uranus700};
  text-decoration: underline;
  word-wrap: break-word;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.uranus500};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }

  ${font}
  ${fontSize};
`;

Link.displayName = 'Link';

Link.defaultProps = {
  font: 'primary',
  fontSize: 'medium',
};

Link.propTypes = {
  ...fontSize.propTypes,
  ...typography.propTypes,
};

export default Link;
