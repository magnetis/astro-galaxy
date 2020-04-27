import styled from 'styled-components';

const PreviewGrid = styled.div`
  & > * {
    margin-top: ${props => props.theme.space[5]}px;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-gap: ${props => props.theme.space[3]}px;
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    margin: 0 -${props => props.theme.space[2]}px;

    & > * {
      margin-top: 0;
    }
  }
`;

export default PreviewGrid;
