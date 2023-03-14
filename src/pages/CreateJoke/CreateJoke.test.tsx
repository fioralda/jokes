import CreateJoke from "./CreateJoke";
import { render, screen, fireEvent } from "../../utils/test-utils";
import * as JokesApi from "../../api/JokesApi";
import { Joke } from "../../api/JokesApi";

const createJokeSpy = vitest.spyOn(JokesApi, "createJoke");

describe("<CreateJoke />", () => {
  it("should render a form with correct fields", () => {
    render(<CreateJoke />);

    const titleInput = screen.getByTestId("joke-title");
    const authorInput = screen.getByTestId("joke-author");
    const bodyInput = screen.getByTestId("joke-body");
    const dateInput = screen.getByTestId("joke-date");
    const viewsInput = screen.getByTestId("joke-views");
    const submitBtn = screen.getByRole("button", { name: "Submit" });

    expect(titleInput).toBeInTheDocument();
    expect(authorInput).toBeInTheDocument();
    expect(bodyInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(viewsInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  it("should render a form with error messages when fields are empty", async () => {
    const { user } = render(<CreateJoke />);

    const submitBtn = screen.getByRole("button", { name: "Submit" });

    await user.click(submitBtn);

    const errorMessages = screen.getAllByTestId("form-error");

    expect(errorMessages).toHaveLength(5);
  });

  it("should successfully submit when all fields are completed", async () => {
    createJokeSpy.mockResolvedValue({
      id: 10,
      Title: "Test",
      Author: "Test@gmail.com",
      Body: "Test Joke",
      Views: "20",
      CreatedAt: 1678665600000,
    } as Joke);
    const { user } = render(<CreateJoke />);

    const titleInput: HTMLInputElement = screen.getByTestId("joke-title");
    const authorInput: HTMLInputElement = screen.getByTestId("joke-author");
    const bodyInput: HTMLInputElement = screen.getByTestId("joke-body");
    const dateInput: HTMLInputElement = screen.getByTestId("joke-date");
    const viewsInput: HTMLInputElement = screen.getByTestId("joke-views");

    fireEvent.input(titleInput, { target: { value: "Test" } });
    fireEvent.input(authorInput, { target: { value: "Test@gmail.com" } });
    fireEvent.input(bodyInput, { target: { value: "Test Joke" } });
    fireEvent.input(dateInput, { target: { value: "2023-03-13" } });
    fireEvent.input(viewsInput, { target: { value: "20" } });

    expect(titleInput.value).toEqual("Test");
    expect(authorInput.value).toEqual("Test@gmail.com");
    expect(bodyInput.value).toEqual("Test Joke");
    expect(dateInput.value).toEqual("2023-03-13");
    expect(viewsInput.value).toEqual("20");

    const submitBtn = screen.getByRole("button", { name: "Submit" });

    await user.click(submitBtn);

    expect(createJokeSpy).toHaveBeenLastCalledWith({
      Author: "Test@gmail.com",
      Body: "Test Joke",
      CreatedAt: 1678665600000,
      Title: "Test",
      Views: "20",
    });
  });
});
