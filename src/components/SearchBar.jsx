import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setTerm(value);
    onSearch(value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search products by name..."
        value={term}
        onChange={handleChange}
      />
    </div>
  );
}