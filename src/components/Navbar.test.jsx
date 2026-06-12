import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

test("renders navigation links", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  expect(screen.getByText(/home/i)).toBeInTheDocument();
  expect(screen.getByText(/products/i)).toBeInTheDocument();
  expect(screen.getByText(/add product/i)).toBeInTheDocument();
});