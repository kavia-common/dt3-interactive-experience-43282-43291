import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders shared navigation", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(screen.getByRole("navigation", { name: /primary navigation/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /contact/i })).toBeInTheDocument();
});
