import { fireEvent, render } from "@testing-library/react";
import { Card } from "./Card";

describe("Card component", () => {
  test("renders card with correct content", () => {
    // Test data
    const data = {
      country: "Country Name",
      population: 123,
      region: "Region",
      capital: "Capital",
      image: "image-url",
    };

    // Render the card component
    const { getByText, getByAltText } = render(
      <Card
        country={data.country}
        population={data.population}
        region={data.region}
        capital={data.capital}
        image={data.image}
      />
    );

    // Assert that the card content is rendered correctly
    expect(getByAltText(`${data.country}-Flag`)).toBeInTheDocument();
    expect(getByText(data.country)).toBeInTheDocument();
    expect(getByText(data.population)).toBeInTheDocument();
    expect(getByText(data.region)).toBeInTheDocument();
    expect(getByText(data.capital)).toBeInTheDocument();
  });

  test("triggers onClick event when the card is clicked", () => {
    // Test data
    const data = {
      country: "Country Name",
      population: 123,
      region: "Region",
      capital: "Capital",
      image: "image-url",
    };

    // Mock onClick event handler
    const onClickMock = jest.fn();

    // Render the card component with the onClick event handler
    const { container } = render(
      <Card
        country={data.country}
        population={data.population}
        region={data.region}
        capital={data.capital}
        image={data.image}
        onClick={onClickMock}
      />
    );

    // Simulate a click event on the card
    container.firstChild && fireEvent.click(container.firstChild);

    // Assert that the onClick event handler was called
    expect(onClickMock).toHaveBeenCalled();
  });
});
