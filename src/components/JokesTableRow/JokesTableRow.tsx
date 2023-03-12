import { useNavigate } from "react-router-dom";
import { Joke } from "../../api/JokesApi";
import { formatDateForTable, formatEmailForTable } from "../../constants";
import { TableRow, TableRowItem, TableRowViewsItem } from "./styled";

const getViewsVariant = (value: number) => {
  if (value >= 0 && value <= 25) {
    return "tomato";
  }
  if (value >= 26 && value <= 50) {
    return "orange";
  }
  if (value >= 51 && value <= 75) {
    return "yellow";
  }
  if (value >= 76 && value <= 100) {
    return "green";
  }
  return "black";
};

type Props = {
  joke: Joke;
};

const JokesTableRow = ({
  joke: { id, Title, Author, CreatedAt, Views },
}: Props) => {
  const navigate = useNavigate();

  return (
    <TableRow>
      <TableRowItem onClick={() => navigate(`/joke/${id}`)}>
        {Title}
      </TableRowItem>
      <TableRowItem>{formatEmailForTable(Author)}</TableRowItem>
      <TableRowItem>{formatDateForTable(CreatedAt)}</TableRowItem>
      <TableRowViewsItem variant={getViewsVariant(+Views)}>
        {Views}
      </TableRowViewsItem>
    </TableRow>
  );
};

export default JokesTableRow;
