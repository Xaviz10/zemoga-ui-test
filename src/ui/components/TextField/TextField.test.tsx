import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TextField } from "./TextField";

describe("TextField", () => {
  it("should render TextField component", () => {
    const { getByLabelText } = render(
      <TextField
        label="Test Label"
        id="test-input"
        name="test"
        placeholder="Enter text"
        data-testid="test-input"
      />
    );

    const inputElement = getByLabelText("Test Label");
    expect(inputElement).toBeInTheDocument();
  });

  it("should update value on input change", () => {
    const { getByTestId } = render(
      <TextField data-testid="test-input" id="test-input" name="test" />
    );

    const inputElement = getByTestId("test-input");
    fireEvent.change(inputElement, { target: { value: "New value" } });
    expect((inputElement as HTMLInputElement).value).toBe("New value");
  });
});
