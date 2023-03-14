import { useJokesContext } from "../../context/JokesProvider";
import { JokesPaginationWrapper, StyledButton, StyledSelect } from "./styled";

const JokesPagination = () => {
  const { page, limit, setPage, setLimit } = useJokesContext();

  return (
    <JokesPaginationWrapper>
      <StyledButton
        disabled={page === 1}
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}
      >
        &lt;
      </StyledButton>
      <div>Page {page}</div>
      <StyledButton
        onClick={() => {
          setPage(page + 1);
        }}
      >
        &gt;
      </StyledButton>
      <StyledSelect value={limit} onChange={(e) => setLimit(+e.target.value)}>
        <option value="5">5</option>
        <option value="10">10</option>
      </StyledSelect>
    </JokesPaginationWrapper>
  );
};

export default JokesPagination;
