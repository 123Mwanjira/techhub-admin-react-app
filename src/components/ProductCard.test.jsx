import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "./ProductCard";
import { ProductContext } from "../context/ProductContext";

const mockDeleteProduct = vi.fn();

test("renders product name", () => {
  render(
    <ProductContext.Provider value={{ deleteProduct: mockDeleteProduct }}>
      <MemoryRouter>
        <ProductCard product={{ id: 1, name: "Laptop", price: 1000 }} />
      </MemoryRouter>
    </ProductContext.Provider>
  );
  expect(screen.getByText(/Laptop/i)).toBeInTheDocument();
});