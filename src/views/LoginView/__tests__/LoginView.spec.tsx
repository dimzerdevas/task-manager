import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Providers } from "../../../test-helpers/Providers";
import { LoginView } from "../LoginView";
import { useAuth0 } from "@auth0/auth0-react";

jest.mock("@auth0/auth0-react");

describe("LoginView", () => {
  beforeEach(() => {
    // TODO: fix ts error
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    useAuth0.mockReturnValue({
      loginWithRedirect: jest.fn(),
    });
  });
  it("renders correctly", () => {
    render(
      <Providers>
        <LoginView />
      </Providers>
    );

    const mustLoginMessage = screen.getByText(/you need to login to continue/i);

    expect(mustLoginMessage).toBeInTheDocument();
  });
  it("calls login function when login button is clicked", async () => {
    const { loginWithRedirect } = useAuth0();
    render(
      <Providers>
        <LoginView />
      </Providers>
    );
    const loginBtn = screen.getByRole("button", {
      name: /login with sso/i,
    });

    fireEvent.click(loginBtn);

    await waitFor(() => {
      expect(loginWithRedirect).toHaveBeenCalledTimes(1);
    });
  });
});
