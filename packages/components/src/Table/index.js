import PropTypes from 'prop-types';
import styled from 'styled-components';

const tableTheme = props =>
  props.darkMode
    ? {
        headColor: props.theme.colors.moon300,
        cellColor: props.theme.colors.moon100,
        rowColor: `${props.theme.colors.moon100}16`,
      }
    : {
        headColor: props.theme.colors.moon500,
        cellColor: props.theme.colors.moon900,
        rowColor: `${props.theme.colors.moon1000}08`,
      };

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  td {
    color: ${props => tableTheme(props).cellColor};
    font: ${props => props.theme.fonts.secondary};
  }

  th {
    color: ${props => tableTheme(props).headColor};
    font: ${props => props.theme.fonts.primary};
  }

  td,
  th {
    padding: ${props => props.theme.space[4]}px ${props => props.theme.space[2]}px;
    text-align: inherit;

    &:first-child {
      padding-left: ${props => props.theme.space[4]}px;
    }

    &:last-child {
      padding-right: ${props => props.theme.space[4]}px;
    }
  }

  tr:nth-child(odd) td {
    background-color: ${props => tableTheme(props).rowColor};
  }

  tr[disabled] {
    opacity: 0.3;
  }
`;

Table.displayName = 'Table';

Table.propTypes = {
  darkMode: PropTypes.bool,
};

export default Table;
