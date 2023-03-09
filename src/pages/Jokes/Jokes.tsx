import { useJokesContext } from "../../context/JokesProvider";
import { useJokesQuery } from "../../queries/useJokesQuery";

const Jokes = () => {
  const { limit, page, setLimit, setPage } = useJokesContext();
  const { data, isSuccess } = useJokesQuery(page, limit);

  if (!isSuccess) {
    return null;
  }

  return (
    <div>
      <div>Page: {page}</div>
      <table>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Created Date</th>
          <th>Views</th>
        </tr>
        {data.map((joke) => {
          return (
            <tr>
              <td>{joke.Title}</td>
              <td>{joke.Author}</td>
              <td>{joke.CreatedAt}</td>
              <td>{joke.Views}</td>
            </tr>
          );
        })}
      </table>
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
