import { useState } from "react";
import { useProducts } from "../hooks/useProducts";

function ProductForm() {
  const { addProduct } = useProducts();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addProduct({
      name,
      price: Number(price)
    });

    setName("");
    setPrice("");
  };

  return (
    <div>
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          value={price}
          placeholder="Price"
          type="number"
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ProductForm;