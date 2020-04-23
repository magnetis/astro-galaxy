import styled from 'styled-components';

const PreviewGrid = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.space[3]}px;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  margin: 0 -${props => props.theme.space[2]}px;
`;

export default PreviewGrid;
