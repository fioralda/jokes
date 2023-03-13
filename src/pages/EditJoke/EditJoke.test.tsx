import EditJoke from "./EditJoke";
import { render, screen } from "../../utils/test-utils";
import * as JokesApi from "../../api/JokesApi";
import { Joke } from "../../api/JokesApi";

const getJokeDetailsSpy = vitest.spyOn(JokesApi, "getJokeDetails");
const updateJokeDetailsSpy = vitest.spyOn(JokesApi, "updateJokeDetails");
const deleteJokeSpy = vitest.spyOn(JokesApi, "deleteJoke");

describe("<EditJoke />", () => {
  it("should render form with correct fields", async () => {
    getJokeDetailsSpy.mockResolvedValue({
      id: 10,
      Title: "Test",
      Author: "Test@gmail.com",
      Body: "Test Joke",
      Views: "20",
      CreatedAt: 1678665600000,
    } as Joke);
    render(<EditJoke />);

    const titleInput = await screen.findByTestId("joke-title");
    const authorInput = screen.getByTestId("joke-author");
    const bodyInput = screen.getByTestId("joke-body");
    const dateInput = screen.getByTestId("joke-date");
    const viewsInput = screen.getByTestId("joke-views");
    const submitBtn = screen.getByRole("button", { name: "Submit" });
    const deleteBtn = screen.getByRole("button", { name: "Delete" });

    expect(titleInput).toBeInTheDocument();
    expect(authorInput).toBeInTheDocument();
    expect(bodyInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(viewsInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
    expect(deleteBtn).toBeInTheDocument();
  });

  it("should call update api when submit button is clicked", async () => {
    getJokeDetailsSpy.mockResolvedValue({
      id: 10,
      Title: "Test",
      Author: "Test@gmail.com",
      Body: "Test Joke",
      Views: "20",
      CreatedAt: 1678665600000,
    } as Joke);
    updateJokeDetailsSpy.mockResolvedValue({
      id: 10,
      Title: "Test",
      Author: "Test@gmail.com",
      Body: "Test Joke",
      Views: "20",
      CreatedAt: 1678665600000,
    } as Joke);
    const { user } = render(<EditJoke />);

    const submitBtn = await screen.findByRole("button", { name: "Submit" });
    expect(submitBtn).toBeInTheDocument();

    await user.click(submitBtn);

    expect(updateJokeDetailsSpy).toHaveBeenCalledWith(undefined, {
      Author: "Test@gmail.com",
      Body: "Test Joke",
      CreatedAt: 1678665600000,
      Title: "Test",
      Views: "20",
    });
  });

  it("should call delete api when delete button is clicked", async () => {
    getJokeDetailsSpy.mockResolvedValue({
      id: 10,
      Title: "Test",
      Author: "Test@gmail.com",
      Body: "Test Joke",
      Views: "20",
      CreatedAt: 1678665600000,
    } as Joke);
    deleteJokeSpy.mockResolvedValue({
      id: 10,
      Title: "Test",
      Author: "Test@gmail.com",
      Body: "Test Joke",
      Views: "20",
      CreatedAt: 1678665600000,
    } as Joke);
    const { user } = render(<EditJoke />);

    const deleteBtn = await screen.findByRole("button", { name: "Delete" });
    expect(deleteBtn).toBeInTheDocument();

    await user.click(deleteBtn);

    expect(deleteJokeSpy).toHaveBeenCalled();
  });
});
