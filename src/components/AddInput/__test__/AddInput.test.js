import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockSetTodos = jest.fn();

describe("AddInput", () => {
  test("should render input element", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />);

    const inputElement = screen.getByPlaceholderText(/add a new task here/i);

    expect(inputElement).toBeInTheDocument();
  });

  test("should type in input element", () => {
    render(<AddInput todos={[]} setTodos={() => {}} />);

    const addButton = screen.getByRole("button");
    const inputElement = screen.getByPlaceholderText(/add a new task here/i);

    fireEvent.change(inputElement, {
      target: {
        value: "123456789",
      },
    });
    expect(inputElement.value).toBe("123456789");

    fireEvent.click(addButton);
    expect(inputElement.value).toBe("");
  });
});
