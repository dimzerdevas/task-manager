import { MemoryRouter } from "react-router";
import { ThemeProvider } from "../../../context/ThemeContext";
import { MainLayout } from "../MainLayout";
import { fireEvent, render, screen, within } from "@testing-library/react";

describe("MainLayout", () => {
  it("renders with correct title", () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <MainLayout />
        </ThemeProvider>
      </MemoryRouter>
    );

    const pageTitle = screen.getByRole("heading", {
      name: /task manager app/i,
    });

    expect(pageTitle).toBeInTheDocument();
  });

  // fails
  it("navigates to different pages", () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <MainLayout />
        </ThemeProvider>
      </MemoryRouter>
    );
    const navigation = screen.getByRole("navigation", {
      name: /desktop/i,
    });
    const homepageUrl = document.URL;
    const taskManagerDrawerBtn = within(navigation).getByText(/task manager/i);

    
    fireEvent.click(taskManagerDrawerBtn);
    const taskManageUrl = document.URL;

    expect(homepageUrl).not.toBe(taskManageUrl);
  });
});
