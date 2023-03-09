import JokesTable from "../../components/JokesTable";
import { useJokesContext } from "../../context/JokesProvider";

const Jokes = () => {
  const { limit, page, setLimit, setPage } = useJokesContext();

  return (
    <div>
      <div>Page: {page}</div>
      <JokesTable />
      <select value={limit} onChange={(e) => setLimit(+e.target.value)}>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
      <div>
        <button
          disabled={page === 1}
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          &lt;
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Jokes;
