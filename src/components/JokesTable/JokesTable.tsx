import { useJokesContext } from "../../context/JokesProvider";
import { useJokesQuery } from "../../queries/useJokesQuery";
import JokesTableRow from "../JokesTableRow";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableHeaderRow,
  TableWrapper,
} from "./styled";

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
          <TableHeaderRow>
            <TableHeaderItem>Title</TableHeaderItem>
            <TableHeaderItem>Author</TableHeaderItem>
            <TableHeaderItem>Created Date</TableHeaderItem>
            <TableHeaderItem>Views</TableHeaderItem>
          </TableHeaderRow>
        </TableHeader>
        <TableBody>
          {data.map((joke) => (
            <JokesTableRow key={joke.id} joke={joke} />
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  );
};

export default JokesTable;
