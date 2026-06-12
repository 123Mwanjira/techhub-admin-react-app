import { render, screen } from "@testing-library/react";
import ProductForm from "./ProductForm";
import { ProductContext } from "../context/ProductContext";

test("renders product form fields", () => {
  render(
    <ProductContext.Provider
      value={{ addProduct: vi.fn() }}
    >
      <ProductForm />
    </ProductContext.Provider>
  );

  expect(
    screen.getByLabelText(/product name/i)
  ).toBeInTheDocument();

  expect(
    screen.getByLabelText(/product price/i)
  ).toBeInTheDocument();
});