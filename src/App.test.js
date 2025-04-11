import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  expect(screen.getByText(/Group 5 CI-CD Project/i)).toBeInTheDocument();
});
