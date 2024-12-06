import { fireEvent, render, screen } from "@testing-library/react";
import { UserDetails } from "../UserDetails";
import { Providers } from "../../../test-helpers/Providers";

const user = {
  name: "Test Testopoulos",
  picture: "https://example.com/test.jpg",
  email: "testopoulos@example.com",
};

const mockLogout = jest.fn();

describe("UserDetails", () => {
  it("renders with user info", () => {
    render(
      <Providers>
        <UserDetails user={user} logout={mockLogout} />
      </Providers>
    );

    const welcomeMessage = screen.getByText(/welcome, test testopoulos!/i);

    expect(welcomeMessage).toBeInTheDocument();
  });

  it("calls logout function when logout button is clicked", () => {
    render(
      <Providers>
        <UserDetails user={user} logout={mockLogout} />
      </Providers>
    );

    const logoutBtn = screen.getByRole("button", {
      name: /log out/i,
    });
    fireEvent.click(logoutBtn);
    expect(mockLogout).toHaveBeenCalled();
  });

  it("toggles theme when theme button is clicked", () => {
    render(
      <Providers>
        <UserDetails user={user} logout={mockLogout} />
      </Providers>
    );

    const nightThemeBtn = screen.getByTestId("ModeNightIcon");
    fireEvent.click(nightThemeBtn);
    expect(nightThemeBtn).not.toBeInTheDocument();

    const lightThemeBtn = screen.getByTestId("LightModeIcon");
    expect(lightThemeBtn).toBeInTheDocument();
  });
});
