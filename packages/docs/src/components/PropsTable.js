import styled from 'styled-components';

const PropsTableWrapper = styled.div`
  margin-bottom: 32px;
  width: 100%;
  overflow-x: auto;

  & table {
    border-collapse: collapse;
    width: 100%;
  }

  & td {
    color: ${props => props.theme.colors.moon900};
  }

  & table,
  & th,
  & td {
    border: 1px solid ${props => props.theme.colors.moon300};
    padding: 8px;
  }
`;

export default PropsTableWrapper;
