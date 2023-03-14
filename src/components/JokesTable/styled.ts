import styled from "styled-components";

export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  color: black;
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
  background-color: ${(props) => props.theme.primary};
  color: white;
  text-align: center;
`;

export const TableHeaderItem = styled.th`
  padding: 1rem;
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: ${(props) => props.theme.text};
`;
