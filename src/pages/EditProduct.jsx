import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, updateProduct } = useProducts();

  const product = products.find((p) => p.id.toString() === id);

  const [name, setName] = useState(product?.name || "");
  const [price, setPrice] = useState(product?.price || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    updateProduct(id, {
      name,
      price: Number(price),
    });

    navigate("/products");
  };

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <h2>Edit Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default EditProduct;