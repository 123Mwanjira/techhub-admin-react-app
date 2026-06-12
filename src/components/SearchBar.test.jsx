import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

test("updates search input", () => {
  const mockSearch = vi.fn();

  render(<SearchBar onSearch={mockSearch} />);

  const input = screen.getByPlaceholderText(
    /search products by name/i
  );

  fireEvent.change(input, {
    target: { value: "Laptop" },
  });

  expect(input.value).toBe("Laptop");
});