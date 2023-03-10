import { useJokesContext } from "../../context/JokesProvider";
import { JokesPaginationWrapper } from "./styled";

const JokesPagination = () => {
  const { page, limit, setPage, setLimit } = useJokesContext();

  return (
    <JokesPaginationWrapper>
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
      <div>Page: {page}</div>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        &gt;
      </button>
      <select value={limit} onChange={(e) => setLimit(+e.target.value)}>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
    </JokesPaginationWrapper>
  );
};

export default JokesPagination;
