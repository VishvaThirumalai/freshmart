// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Remove Navigate
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Components
import GroceryHome from './components/GroceryHome';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ShopPage from './components/ShopPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import OffersPage from './components/OffersPage';
import NotFoundPage from './components/NotFoundPage';
import CategoryPage from './components/CategoryPage';
import CartPage from './components/CartPage';
import OrdersPage from './components/OrdersPage';
import APITest from './components/APITest';
// Import styles
import './styles.css';
import './App.css';

function App() {
  return (
    <Router> {/* ✅ Router must be the outermost provider */}
      <ToastProvider>
        <AuthProvider>
          <CartProvider>
            <div className="App">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<GroceryHome />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/offers" element={<OffersPage />} />
                <Route path="/category/:categoryName" element={<CategoryPage />} />
                
                {/* Routes that work for both authenticated and non-authenticated users */}
                <Route path="/cart" element={<CartPage />} />
                <Route path="/orders" element={<OrdersPage />} />
                
                {/* Catch all route */}
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/api-test" element={<APITest />} />
              </Routes>
            </div>
          </CartProvider>
        </AuthProvider>
      </ToastProvider>
    </Router>
  );
}

export default App;