import { render, screen } from "../../utils/test-utils";
import NotFound from "./NotFound";

describe("<NotFound />", () => {
  it("should render the Not Found page with the right texts and button", () => {
    render(<NotFound />);

    const title = screen.getByText("404");

    const subtitle = screen.getByText("Route not found");

    const button = screen.getByRole("button", { name: "Home" });

    expect(title).toBeInTheDocument();

    expect(subtitle).toBeInTheDocument();

    expect(button).toBeInTheDocument();
  });

  it("should redirect to home when button is clicked", async () => {
    const { user } = render(<NotFound />);

    const button = screen.getByRole("button", { name: "Home" });

    await user.click(button);

    expect(window.location.pathname).toEqual("/");
  });
});
