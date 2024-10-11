import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component Test", () => {
  // Test for basic rendering
  test("Renders the button with text", () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  // Test onClick functionality
  test("calls onClick when button is clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test button with icon rendering
  test("renders button with icon", () => {
    const Icon = () => <svg data-testid="icon" />;
    render(<Button Icon={Icon}>Click Me</Button>);
    const iconElement = screen.getByTestId("icon");
    expect(iconElement).toBeInTheDocument();
  });

  // Test different button modes
  test("applies mode-specific class names", () => {
    const { container } = render(<Button mode="filled">Click Me</Button>);
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toHaveClass("button filled-button");
  });

  test("renders smallGreen button mode", () => {
    const { container } = render(<Button mode="smallGreen">Click Me</Button>);
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toHaveClass("button smallGreen-button");
  });

  // Test for anchor button type
  test("renders anchor element when buttonType is anchor", () => {
    render(
      <Button buttonType="anchor" href="https://example.com">
        Link
      </Button>
    );
    const anchorElement = screen.getByText(/link/i);
    expect(anchorElement.tagName.toLowerCase()).toBe("a");
    expect(anchorElement).toHaveAttribute("href", "https://example.com");
  });

  // Test disabled button
  test("renders disabled button", () => {
    render(<Button disabled={true}>Disabled</Button>);
    const buttonElement = screen.getByText(/disabled/i);
    expect(buttonElement).toBeDisabled();
  });

  // Test for correct class when Icon is provided
  test("adds icon-button class when Icon is present", () => {
    const Icon = () => <svg data-testid="icon" />;
    const { container } = render(<Button Icon={Icon}>Click Me</Button>);
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toHaveClass("icon-button");
  });

  // Test button with additional custom classes
  test("applies custom className", () => {
    const { container } = render(
      <Button className="custom-class">Click Me</Button>
    );
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toHaveClass("custom-class");
  });
});
