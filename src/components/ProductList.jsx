import ProductCard from "./ProductCard";
import { useProducts } from "../hooks/useProducts";

function ProductList() {
  const { products } = useProducts();

  return (
    <div>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
      )}
    </div>
  );
}

export default ProductList;