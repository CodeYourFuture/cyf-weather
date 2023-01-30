import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app title", () => {
  render(<App />);
  const appTitle = screen.getByText(/CYF Weather/i);
  expect(appTitle).toBeInTheDocument();
});
