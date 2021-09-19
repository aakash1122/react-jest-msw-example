import { render } from "@testing-library/react";
import Header from "../Header";

describe("header renders correctly", () => {
  it("render 'todos'", () => {
    const { getByRole } = render(<Header title="todos" />);
    expect(getByRole("heading").innerHTML).toBe("todos");
  });

  it("render empty string", () => {
    const { getByRole } = render(<Header title="" />);
    expect(getByRole("heading").innerHTML).toBe("");
  });
});
