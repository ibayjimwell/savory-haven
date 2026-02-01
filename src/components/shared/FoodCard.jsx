import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Plus, Check, ShoppingBag } from 'lucide-react';

export default function FoodCard({ item, showAddToCart = true }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({ ...item, type: 'menu' });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 sm:h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {showAddToCart && (
          <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`absolute bottom-4 right-4 p-3 rounded-xl shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ${
              isAdded 
                ? 'bg-green-500 text-white' 
                : 'bg-red-700 text-white hover:bg-red-800'
            }`}
          >
            {isAdded ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          </button>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-gray-900 text-lg leading-tight">
            {item.name}
          </h3>
          <span className="text-red-700 font-bold text-lg whitespace-nowrap">
            ${item.price.toFixed(2)}
          </span>
        </div>
        
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>

        {showAddToCart && (
          <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`mt-4 w-full py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
              isAdded 
                ? 'bg-green-500 text-white' 
                : 'bg-red-50 text-red-600 hover:bg-red-100'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                Added!
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}