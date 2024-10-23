import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SelectDropdown from "./SelectDropdown";

describe("SelectDropdown Component", () => {
  test("renders the placeholder text when no value is selected", () => {
    render(
      <SelectDropdown
        value=""
        onChange={() => {}}
        placeholder="Select an option"
        options={["Option 1", "Option 2"]}
      />
    );

    // Check if the placeholder is visible
    const placeholderElement = screen.getByText("Select an option");
    expect(placeholderElement).toBeInTheDocument();
  });
});
