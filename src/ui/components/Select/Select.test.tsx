import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import { Select } from "./Select";

describe("Select Component", () => {
  it("renders Select component with options", () => {
    const options = [
      { id: "1", name: "Option 1" },
      { id: "2", name: "Option 2" },
    ];

    render(<Select defaultValue="1" options={options} />);

    const DefaultOptionSelected = screen.getByText("Option 1");

    expect(DefaultOptionSelected).toBeInTheDocument();
  });

  it("renders error message and helper text", () => {
    const options = [
      { id: "1", name: "Option 1" },
      { id: "2", name: "Option 2" },
    ];

    const { getByText } = render(
      <Select
        defaultValue="1"
        options={options}
        error={true}
        helperText="This field is required"
      />
    );

    const errorMessage = getByText("This field is required");
    expect(errorMessage).toBeInTheDocument();
  });
});
