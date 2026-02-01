import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Plus, Check, Tag, ShoppingBag } from 'lucide-react';

export default function DealCard({ deal }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({ ...deal, type: 'deal' });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative overflow-hidden">
        <img
          src={deal.image}
          alt={deal.name}
          className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1.5 rounded-lg font-bold text-sm flex items-center gap-1.5 shadow-lg">
          <Tag className="w-4 h-4" />
          Save {deal.savings}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="p-5">
        <h3 className="font-bold text-gray-900 text-xl mb-2">
          {deal.name}
        </h3>
        
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {deal.description}
        </p>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl font-bold text-red-700">
            ${deal.price.toFixed(2)}
          </span>
          <span className="text-gray-400 line-through text-lg">
            ${deal.originalPrice.toFixed(2)}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={isAdded}
          className={`w-full py-3.5 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
            isAdded 
              ? 'bg-green-500 text-white' 
              : 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-lg shadow-red-200'
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-5 h-5" />
              Added to Cart!
            </>
          ) : (
            <>
              <ShoppingBag className="w-5 h-5" />
              Get This Deal
            </>
          )}
        </button>
      </div>
    </div>
  );
}