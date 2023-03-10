import Header from "../../components/Header";
import JokesPagination from "../../components/JokesPagination";
import JokesTable from "../../components/JokesTable";

const Jokes = () => {
  return (
    <div>
      <JokesTable />
      <JokesPagination />
    </div>
  );
};

export default Jokes;
