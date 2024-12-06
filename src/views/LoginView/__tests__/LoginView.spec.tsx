import { render, screen } from "@testing-library/react";
import { Providers } from "../../../test-helpers/Providers";
import { LoginView } from "../LoginView";

describe("LoginView", () => {
  it("renders correctly", () => {
    render(
      <Providers>
        <LoginView />
      </Providers>
    );

    const mustLoginMessage = screen.getByText(/you need to login to continue/i);

    expect(mustLoginMessage).toBeInTheDocument();
  });
});
