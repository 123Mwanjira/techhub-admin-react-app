import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid black" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/products">Products</Link> |{" "}
      <Link to="/add-product">Add Product</Link>
    </nav>
  );
}

export default Navbar;