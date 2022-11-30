import Todo from "./Todo";

import { render } from "@testing-library/react";

// test("renders learn react link", () => {
//   render(<BoxList />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("renders without crashing", () => {
  render(<Todo id={1} key={1} msg={"TodoTestMsg"} isComplete={false} />);
});
it("matches snapshot", function () {
  const { asFragment } = render(
    <Todo id={1} key={1} msg={"TodoTestMsg"} isComplete={false} />
  );
  expect(asFragment()).toMatchSnapshot();
});
