import { useState, useRef } from "react";

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  // useRef hook
  const inputRef = useRef(null);

  function handleChange(e) {
    const value = e.target.value;
    setTerm(value);
    onSearch(value);
  }

  function focusSearch() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search products by name..."
        value={term}
        onChange={handleChange}
      />

      <button onClick={focusSearch}>
        Focus Search
      </button>
    </div>
  );
}