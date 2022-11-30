import NewTodoForm from "./NewTodoForm";
import { addTodo } from "./TodoList";

import { render } from "@testing-library/react";

it("renders without crashing", () => {
  render(<NewTodoForm addTodo={addTodo} />);
});
it("matches snapshot", function () {
  const { asFragment } = render(<NewTodoForm addTodo={addTodo} />);
  expect(asFragment()).toMatchSnapshot();
});
