import { fireEvent, render } from "@testing-library/react";
import { ThemeProvider, useTheme } from "next-themes";
import { Header } from "./Header";

describe("Header component", () => {
  it("renders header with correct content", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
    // Mock the useTheme hook
    jest.mock("next-themes", () => ({
      useTheme: () => ({
        theme: "light",
        setTheme: jest.fn(),
      }),
    }));

    // Render the header component within a ThemeProvider
    const { getByText } = render(
      <ThemeProvider attribute="class" enableSystem={false}>
        <Header />
      </ThemeProvider>
    );

    // Assert that the header content is rendered correctly
    expect(getByText("Where in the world?")).toBeInTheDocument();
    expect(getByText("Dark Mode")).toBeInTheDocument();
  });

  // it("triggers setTheme function when the mode button is clicked", () => {
  //   // Mock the useTheme hook
  //   const mockSetTheme = jest.fn();
  //   const useThemeMock = jest
  //     .spyOn(require("next-themes"), "useTheme")
  //     .mockReturnValue({
  //       theme: "light",
  //       setTheme: mockSetTheme,
  //     });

  //   // Render the header component within a ThemeProvider
  //   const { getByText } = render(
  //     <ThemeProvider attribute="class" enableSystem={false}>
  //       <Header />
  //     </ThemeProvider>
  //   );

  //   // Simulate a click event on the mode button
  //   fireEvent.click(getByText("Dark Mode"));

  //   // Assert that the setTheme function was called
  //   expect(useThemeMock).toHaveBeenCalledWith("dark");
  // });
});
