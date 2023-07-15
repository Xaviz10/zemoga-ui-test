import { render, screen } from "@testing-library/react";
import { PaginationCustom } from "./Pagination";
import { useTheme } from "next-themes";

jest.mock("next-themes", () => ({
  useTheme: jest.fn(),
}));

describe("PaginationCustom", () => {
  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue({ theme: "light" }); // Set the theme as 'light' for the test
  });

  it("renders the Pagination component with correct props and styles", () => {
    const { container } = render(
      <PaginationCustom
        className="custom-pagination"
        count={10}
        page={1}
        onChange={jest.fn()}
      />
    );

    const paginationComponent = screen.getByRole("navigation");
    const paginationItems = screen.getAllByRole("button");

    expect(paginationComponent).toBeInTheDocument();
    expect(paginationComponent).toHaveClass("custom-pagination");
    expect(paginationItems).toHaveLength(8);
  });
});
