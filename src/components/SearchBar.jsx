import { useProducts } from "../hooks/useProducts";

function SearchBar() {
  const { search, setSearch } = useProducts();

  return (
    <div style={{ margin: "10px" }}>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;