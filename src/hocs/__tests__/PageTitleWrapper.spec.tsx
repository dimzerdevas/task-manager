import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { PageTitleWrapper } from "../PageTitleWrapper";
import { expect, jest } from "@jest/globals";

jest.mock("../../hooks/usePageTitle.ts", () => ({
  usePageTitle: jest.fn(),
}));

describe("PageTitleWrapper", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render children with the correct props", () => {
    const route = { pageTitle: "Test page" };

    render(
      <PageTitleWrapper title={route.pageTitle}>
        <div>Content</div>
      </PageTitleWrapper>
    );

    expect(screen.getByText("Content"));
  });
});
