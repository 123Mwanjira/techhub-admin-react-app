import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";

test("renders product name and price", () => {
  const product = {
    id: 1,
    name: "Laptop",
    price: 1200
  };

  render(<ProductCard product={product} />);

  expect(screen.getByText("Laptop")).toBeInTheDocument();
  expect(screen.getByText("1200")).toBeInTheDocument();
});