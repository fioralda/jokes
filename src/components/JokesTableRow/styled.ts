import styled from "styled-components";

export const TableRow = styled.tr`
  background-color: lightgrey;
  text-align: start;
  background-color: ${(props) => props.theme.secondary};
`;

export const TableRowItem = styled.td`
  padding: 0.5rem;
`;

export const TableRowViewsItem = styled(TableRowItem)<{ variant: string }>`
  color: ${({ variant, theme }) => (variant ? variant : theme.text)};
`;
