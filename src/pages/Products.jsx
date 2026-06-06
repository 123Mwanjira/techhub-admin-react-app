import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

function Products() {
  const { products } = useProducts();

  return (
    <div>
      <h2>Products</h2>

      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
}

export default Products;