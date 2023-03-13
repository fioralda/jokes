import Jokes from "./Jokes";
import { render, screen } from "../../utils/test-utils";
import * as JokesApi from "../../api/JokesApi";
import { Joke } from "../../api/JokesApi";

const getJokesSpy = vitest.spyOn(JokesApi, "getJokes");

describe("<Jokes />", () => {
  beforeEach(() => {
    vitest.resetAllMocks();
  });

  it("should render table with correct number of rows", async () => {
    getJokesSpy.mockResolvedValue([
      {
        id: 1,
        Body: "test",
        Title: "test",
        Views: "40",
        Author: "test@gmail.com",
        CreatedAt: 1678700691,
      },
      {
        id: 2,
        Body: "test",
        Title: "test",
        Views: "40",
        Author: "test@gmail.com",
        CreatedAt: 1678700691,
      },
    ] as Joke[]);
    render(<Jokes />);

    const tableRows = await screen.findAllByTestId("jokes-table-row");

    expect(tableRows).toHaveLength(2);
  });

  it("should render table with correct correct pagination buttons", async () => {
    getJokesSpy.mockResolvedValue([
      {
        id: 1,
        Body: "bla",
        Title: "bla",
        Views: "40",
        Author: "test@gmail.com",
        CreatedAt: 1678700691,
      },
    ] as Joke[]);
    render(<Jokes />);

    const prevPageBtn = screen.getByText("<");
    const nextPageBtn = screen.getByText(">");
    const pageLimitBtn = await screen.getAllByRole("option");

    expect(prevPageBtn).toBeInTheDocument();
    expect(prevPageBtn).toBeDisabled();
    expect(nextPageBtn).toBeInTheDocument();
    expect(nextPageBtn).not.toBeDisabled();
    expect(pageLimitBtn).toHaveLength(2);
  });

  it("should change page when next page button is clicked", async () => {
    getJokesSpy.mockResolvedValue([
      {
        id: 1,
        Body: "bla",
        Title: "bla",
        Views: "40",
        Author: "test@gmail.com",
        CreatedAt: 1678700691,
      },
    ] as Joke[]);
    const { user } = render(<Jokes />);

    const nextPageBtn = screen.getByText(">");

    await user.click(nextPageBtn);

    expect(getJokesSpy).toHaveBeenLastCalledWith(2, 5);
  });
});
