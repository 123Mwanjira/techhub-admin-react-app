import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  // GET products once
  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  // ✅ ADD PRODUCT (POST) — FIXED & SAFE
  const addProduct = async (product) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/products",
        product
      );

      setProducts((prev) => [...prev, res.data]);
    } catch (err) {
      console.log("Add product error:", err);
    }
  };

  // DELETE PRODUCT
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/products/${id}`);

      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.log("Delete error:", err);
    }
  };

  // UPDATE PRODUCT (PATCH)
  const updateProduct = async (id, updatedData) => {
    try {
      const res = await axios.patch(
        `http://localhost:3001/products/${id}`,
        updatedData
      );

      setProducts((prev) =>
        prev.map((p) => (p.id === id ? res.data : p))
      );
    } catch (err) {
      console.log("Update error:", err);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        updateProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}