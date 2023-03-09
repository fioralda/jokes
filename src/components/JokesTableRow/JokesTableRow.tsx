import { Joke } from "../../api/JokesApi";
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

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const formatDate = (date: number) => {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  return `${day} ${MONTHS[month]} ${year}`;
};

type Props = {
  joke: Joke;
};

const JokesTableRow = ({
  joke: { Title, Author, CreatedAt, Views },
}: Props) => {
  return (
    <TableRow>
      <TableRowItem>{Title}</TableRowItem>
      <TableRowItem>{Author}</TableRowItem>
      <TableRowItem>{formatDate(CreatedAt)}</TableRowItem>
      <TableRowViewsItem variant={getViewsVariant(+Views)}>
        {Views}
      </TableRowViewsItem>
    </TableRow>
  );
};

export default JokesTableRow;
