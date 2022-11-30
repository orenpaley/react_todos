import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders without Crashing", () => {
  render(<App />);
});
