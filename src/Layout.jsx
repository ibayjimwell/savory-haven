import React from 'react';
import { CartProvider } from './components/context/CartContext';

export default function Layout({ children }) {
  return (
    <CartProvider>
      <div className="font-sans antialiased">
        {children}
      </div>
    </CartProvider>
  );
}