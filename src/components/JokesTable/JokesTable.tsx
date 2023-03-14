import { useJokesContext } from "../../context/JokesProvider";
import { useJokesQuery } from "../../queries/useJokesQuery";
import JokesTableRow from "../JokesTableRow";
import {
  Loading,
  Table,
  TableHeader,
  TableHeaderItem,
  TableWrapper,
} from "./styled";

const JokesTable = () => {
  const { limit, page } = useJokesContext();
  const { data, isLoading, isSuccess } = useJokesQuery(page, limit);

  if (isLoading) {
    return (
      <TableWrapper>
        <Loading>Loading...</Loading>
      </TableWrapper>
    );
  }

  if (!isSuccess) {
    return null;
  }

  return (
    <TableWrapper>
      <Table>
        <TableHeader>
          <tr>
            <TableHeaderItem>Title</TableHeaderItem>
            <TableHeaderItem>Author</TableHeaderItem>
            <TableHeaderItem>Created Date</TableHeaderItem>
            <TableHeaderItem>Views</TableHeaderItem>
          </tr>
        </TableHeader>
        <tbody>
          {data.map((joke) => (
            <JokesTableRow key={joke.id} joke={joke} />
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default JokesTable;
