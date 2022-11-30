import TodoList from "./TodoList";

import { render } from "@testing-library/react";

it("renders without crashing", () => {
  render(<TodoList />);
});
