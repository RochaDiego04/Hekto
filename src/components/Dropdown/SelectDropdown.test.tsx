import { render, screen, fireEvent } from "@testing-library/react";
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
  test("opens the dropdown when clicked", () => {
    render(
      <SelectDropdown
        value=""
        onChange={() => {}}
        placeholder="Select an option"
        options={["Option 1", "Option 2"]}
      />
    );

    // options closed initially
    expect(screen.queryByText("Option 1")).not.toBeInTheDocument();

    // Click on the dropdown
    const dropdown = screen.getByText("Select an option");
    fireEvent.click(dropdown);

    // options opened
    expect(screen.getByText("Option 1")).toBeInTheDocument();
  });
  test("closes the dropdown when clicking outside", () => {
    render(
      <div>
        <SelectDropdown
          value=""
          onChange={() => {}}
          placeholder="Select an option"
          options={["Option 1", "Option 2"]}
        />
        <div data-testid="outside">Outside Element</div>
      </div>
    );

    // Open the dropdown
    fireEvent.click(screen.getByText("Select an option"));
    expect(screen.getByText("Option 1")).toBeInTheDocument();

    // Click outside the dropdown
    fireEvent.mouseDown(screen.getByTestId("outside"));

    // Expect the dropdown to close
    expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
  });
});
