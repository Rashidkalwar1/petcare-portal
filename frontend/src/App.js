import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegisterPet from './RegisterPet';
import PetList from './PetList';
import About from './About';
import PrivacyPolicy from './PrivacyPolicy';
import Terms from './Terms';
import Refund from './Refund';
import ProductShowcase from './ProductShowcase';
import Footer from './Footer';
import ProductCreate from './components/ProductCreate';
import ProductEdit from './components/ProductEdit';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://petcare-backend.onrender.com/api/products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <Router>
      <header className="text-center py-3 bg-white border-bottom">
        <h1 className="fw-bold">🐾 Bark Buds – PetCare Portal</h1>
        <p className="lead">Register pets, explore products, and enjoy trusted care</p>
      </header>

      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 border-bottom">
        <Link className="navbar-brand fw-bold" to="/">PetCare Portal</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/register">Register Pet</Link>
            <Link className="nav-link" to="/pets">Pet List</Link>
            <Link className="nav-link" to="/product">Product</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/privacy">Privacy</Link>
            <Link className="nav-link" to="/terms">Terms</Link>
            <Link className="nav-link" to="/refund">Refund</Link>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="*" element={<h2>Page Not Found</h2>} />
          <Route path="/" element={
            <div className="text-center mt-4">
              <h2>Welcome to PetCare Portal</h2>
              <p className="lead">Your trusted companion for pet registration and care</p>
              <div className="d-flex justify-content-center gap-3 mt-3">
                <span>🐶 Register Pets</span>
                <span>🛍️ Explore Products</span>
                <span>🔒 Trusted Platform</span>
              </div>
              <h3 className="mt-4">Featured Products</h3>
              <ul className="list-group">
                {products.map(product => (
                  <li key={product.id} className="list-group-item">
                    {product.name}
                  </li>
                ))}
              </ul>
            </div>
          } />
          <Route path="/register" element={<RegisterPet />} />
          <Route path="/pets" element={<PetList />} />
          <Route path="/product" element={<ProductShowcase />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/add-product" element={<ProductCreate />} />
          <Route path="/edit-product/:id" element={<ProductEdit />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
