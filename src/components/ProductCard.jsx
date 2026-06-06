import { useNavigate } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{product.name}</h3>
      <p>{product.price}</p>

      <button onClick={() => deleteProduct(product.id)}>
        Delete
      </button>

      <button onClick={() => navigate(`/edit/${product.id}`)}>
        Edit
      </button>
    </div>
  );
}

export default ProductCard;