import styled from "styled-components";

export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
`;

export const Table = styled.table`
  width: 80%;

  tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
  }

  th:first-child {
    border-top-left-radius: 10px;
  }

  th:last-child {
    border-top-right-radius: 10px;
  }

  tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
  }
`;

export const TableHeader = styled.thead`
  background-color: purple;
  text-align: center;
`;

export const TableHeaderRow = styled.tr``;

export const TableHeaderItem = styled.th`
  padding: 1rem;
`;

export const TableBody = styled.tbody``;
