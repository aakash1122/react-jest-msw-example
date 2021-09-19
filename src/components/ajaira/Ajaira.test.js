import { render, screen } from "@testing-library/react";
import Ajaira from "./Ajaira";

test("renders laakash in h1", () => {
  render(<Ajaira name="aakash" />);
  const testElement = screen.getAllByRole("heading")[0];
  expect(testElement).toBeInTheDocument();

  expect(testElement.innerHTML).toBe("aakash");
});
