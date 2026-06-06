React Product Admin Dashboard
 Overview

This project is a React-based Single Page Application (SPA) built as an admin dashboard for managing products in an e-commerce system. It demonstrates modern frontend development practices including component-based architecture, state management, routing, API integration, and testing.

The application allows an administrator to:

View products
Add new products
Edit existing products
Delete products
Search products dynamically

It uses a simulated backend powered by JSON Server.

 Features
 Core Features (CRUD)
Create new products (POST)
Read/display products (GET)
Update products (PATCH)
Delete products (DELETE)
 Search Functionality
Live filtering of products by name
 Routing (React Router)
Home page
Products page
Add Product page
Edit Product page
404 Not Found page
 State Management
Context API for global product state
Custom hook (useProducts) for clean access to context
🔌 Backend Simulation
JSON Server used as fake REST API
Persistent data stored in db.json
 Testing
Vitest configured
React Testing Library used
Component testing (ProductCard, ProductForm)
Interaction testing (form input handling)
 Tech Stack
React (Vite)
React Router DOM
Axios
Context API
JSON Server
Vitest
React Testing Library
 Project Structure
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProductForm.jsx
│   ├── ProductList.jsx
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
├── hooks/
│   ├── useProducts.js
│
├── services/
│   ├── api.js
│
├── setupTests.js
└── main.jsx
 Installation & Setup
1. Clone repository
git clone https://github.com/your-username/react-product-admin-dashboard.git
cd react-product-admin-dashboard
2. Install dependencies
npm install
3. Start JSON Server (Backend)
npm run server

Backend runs at:

http://localhost:3001/products
4. Start frontend
npm run dev

Frontend runs at:

http://localhost:5173
5. Run tests
npm run test
 API Endpoints
Method	Endpoint	Description
GET	/products	Fetch all products
POST	/products	Add new product
PATCH	/products/:id	Update product
DELETE	/products/:id	Delete product
 Key Concepts Demonstrated
React functional components
Hooks (useState, useEffect, useContext)
Custom hooks
Context API global state
React Router navigation
Controlled forms
API integration with Axios
CRUD operations
Component reusability
Basic unit testing
 Testing Strategy
Unit tests for UI components
Form input interaction tests
Context-based rendering tests
Vitest used as test runner
React Testing Library for DOM assertions
 Known Issues
Tests may require stable environment setup in WSL/Linux
JSON Server must run separately before using app features
 Future Improvements
Add authentication system
Improve UI/UX design
Add pagination
Add product categories
Deploy to Netlify/Vercel
Improve test coverage
 Author
 Maurine Wanjira

Built as part of a React Summative Assessment Project demonstrating frontend development skills including state management, routing, API handling, and testing.

🏁 Conclusion

This project demonstrates a complete React workflow from UI design to state management, backend simulation, and testing — simulating a real-world admin dashboard application.