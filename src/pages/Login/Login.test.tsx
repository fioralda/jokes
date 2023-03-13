import { ReactElement } from "react";
import { render, screen } from "../../utils/test-utils";
import Login from "./Login";

const loginMock = vitest.fn();
vitest.mock("../../context/AuthProvider", () => ({
  default: ({ children }: { children: ReactElement }) => <>{children}</>,
  useAuthContext: () => ({
    token: "",
    login: loginMock,
  }),
}));

describe("<Login />", () => {
  it("should render the login page with login button", async () => {
    const { user } = render(<Login />);

    const loginButton = screen.getByText("Login");

    expect(loginButton).toBeInTheDocument();

    await user.click(loginButton);

    expect(loginMock).toHaveBeenCalledTimes(1);
  });
});
