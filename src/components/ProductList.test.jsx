import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductList from "./ProductList";
import { ProductContext } from "../context/ProductContext";

test("renders product list", () => {
  const mockProducts = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 800 },
  ];

  render(
    <ProductContext.Provider
      value={{
        products: mockProducts,
        deleteProduct: vi.fn(),
      }}
    >
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    </ProductContext.Provider>
  );

  expect(screen.getByText(/laptop/i)).toBeInTheDocument();
  expect(screen.getByText(/phone/i)).toBeInTheDocument();
});