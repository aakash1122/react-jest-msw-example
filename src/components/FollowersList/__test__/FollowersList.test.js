import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

import { server } from "../../../mocks/server";
// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

const MockFollowerList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("Followers list", () => {
  test("should render follower list", async () => {
    render(<MockFollowerList />);
    // const followerItem = await screen.findByTestId("follower-item-0");
    const followerItem = await screen.findByTestId("follower-container");
    expect(followerItem).toBeInTheDocument();
  });
  test("should render 2 follower", async () => {
    render(<MockFollowerList />);
    // const followerItem = await screen.findAByTestId("follower-container");
    const followerItem = await screen.findAllByTestId(/follower-item/i);
    expect(followerItem.length).toBe(2);
  });
});
