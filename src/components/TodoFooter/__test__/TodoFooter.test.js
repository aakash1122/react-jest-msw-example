import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

const MockFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("test footer", () => {
  it("should do something", async () => {
    render(<MockFooter numberOfIncompleteTasks={0} />);

    const element = screen.getByText(/0 tasks/i);

    const para = screen.getByRole("paragraph");
    console.log(para.innerHTML);

    expect(element).toBeInTheDocument();
  });
});
