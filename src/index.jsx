import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { AsideNavigationProvider } from './context/AsideNavigationContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <WishlistProvider>
          <AsideNavigationProvider>




            <Router>
              <App />
            </Router>
          </AsideNavigationProvider>
        </WishlistProvider>
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>,
);
