import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button Component", () => {
  it("renders button correctly", () => {
    const { getByRole } = render(<Button onClick={() => {}}>Click me</Button>);
    const button = getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click me");
  });

  it("calls onClick prop when button is clicked", () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(
      <Button onClick={onClickMock}>Click me</Button>
    );
    const button = getByRole("button");

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
