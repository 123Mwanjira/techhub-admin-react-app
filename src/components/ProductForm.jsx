import { useState, useId } from "react";
import { useProducts } from "../hooks/useProducts";

function ProductForm() {
  const { addProduct } = useProducts();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // useId hook
  const nameId = useId();
  const priceId = useId();

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
        <div>
          <label htmlFor={nameId}>Product Name</label>
          <input
            id={nameId}
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor={priceId}>Product Price</label>
          <input
            id={priceId}
            value={price}
            placeholder="Price"
            type="number"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ProductForm;