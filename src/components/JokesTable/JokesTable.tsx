import { useJokesContext } from "../../context/JokesProvider";
import { useJokesQuery } from "../../queries/useJokesQuery";
import JokesTableRow from "../JokesTableRow";
import { Table, TableHeader, TableHeaderItem, TableWrapper } from "./styled";

const JokesTable = () => {
  const { limit, page } = useJokesContext();
  const { data, isSuccess } = useJokesQuery(page, limit);

  if (!isSuccess) {
    return null;
  }

  return (
    <TableWrapper>
      <Table>
        <TableHeader>
          <TableHeaderItem>Title</TableHeaderItem>
          <TableHeaderItem>Author</TableHeaderItem>
          <TableHeaderItem>Created Date</TableHeaderItem>
          <TableHeaderItem>Views</TableHeaderItem>
        </TableHeader>
        {data.map((joke) => (
          <JokesTableRow joke={joke} />
        ))}
      </Table>
    </TableWrapper>
  );
};

export default JokesTable;
