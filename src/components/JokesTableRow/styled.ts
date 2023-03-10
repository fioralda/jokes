import styled from "styled-components";

export const TableRow = styled.tr`
  background-color: lightgrey;
  text-align: start;
`;

export const TableRowItem = styled.td`
  padding: 0.5rem;
`;

export const TableRowViewsItem = styled(TableRowItem)<{ variant: string }>`
  color: ${({ variant }) => (variant ? variant : "black")};
`;