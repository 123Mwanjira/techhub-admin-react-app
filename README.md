TechHub Admin React App

A modern React-based Admin Dashboard for managing products in an e-commerce system. This project demonstrates advanced React concepts including state management, CRUD operations, routing, context API, and testing.

Live Features
Home page describing the application
Products page displaying all products
Add Product form (POST to backend)
Edit Product (PATCH updates)
Delete Product
Live search functionality
Client-side routing (React Router)
Global state management using Context API
 Unit testing with Vitest & React Testing Library
 Tech Stack
React (Vite)
React Router DOM
Axios
Context API
JSON Server (mock backend)
Vitest
React Testing Library
 Project Structure
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   ├── ProductList.jsx
│   ├── ProductForm.jsx
│   ├── SearchBar.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── AddProduct.jsx
│   ├── EditProduct.jsx
│   ├── NotFound.jsx
│
├── context/
│   ├── ProductContext.jsx
│
├── App.jsx
├── main.jsx
 Installation & Setup
1. Clone the repository
git clone https://github.com/123Mwanjira/techhub-admin-react-app.git
cd techhub-admin-react-app
2. Install dependencies
npm install
3. Start development server
npm run dev
4. Start JSON Server (backend)

Make sure db.json exists in root:

npm run server

Backend runs at:

http://localhost:3001/products
5. Run tests
npm run test
 Sample Backend Data (db.json)
{
  "products": [
    {
      "id": 1,
      "name": "Laptop",
      "price": 1200
    },
    {
      "id": 2,
      "name": "Phone",
      "price": 800
    }
  ]
}
 Key Features Explained
 CRUD Operations
GET products from JSON server
POST new products via form
PATCH updates for editing products
DELETE product entries
 Routing

Implemented using React Router:

/ → Home
/products → Products list
/add-product → Add form
/edit/:id → Edit form
 → 404 page
 State Management

Global state handled using Context API:

Centralized product state
Shared across components
Avoids prop drilling
 Search Functionality
Live filtering of products
Updates results as user types
 Testing
Built with Vitest
React Testing Library used
Example test: ProductCard renders correctly
 Future Improvements
Authentication (login system)
Product categories
Pagination
Advanced filtering
Deployment (Netlify/Vercel)
More unit & integration tests
 Author

Maureen Wanjira

 License

This project is for educational purposes.

 Status

✔ Fully functional SPA
✔ CRUD operations working
✔ Routing implemented
✔ Context API used
✔ Testing configured
✔ Git workflow completed