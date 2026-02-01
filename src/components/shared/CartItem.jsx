import React from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
      />
      
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-gray-900 truncate">
              {item.name}
            </h3>
            {item.type === 'deal' && (
              <span className="inline-block mt-1 px-2 py-0.5 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                Special Deal
              </span>
            )}
          </div>
          <button
            onClick={() => removeFromCart(item.id, item.type)}
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center bg-gray-100 rounded-xl">
            <button
              onClick={() => updateQuantity(item.id, item.type, item.quantity - 1)}
              className="p-2 hover:bg-gray-200 rounded-l-xl transition-colors"
            >
              <Minus className="w-4 h-4 text-gray-600" />
            </button>
            <span className="px-4 font-semibold text-gray-900 min-w-[40px] text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.type, item.quantity + 1)}
              className="p-2 hover:bg-gray-200 rounded-r-xl transition-colors"
            >
              <Plus className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <span className="font-bold text-red-700 text-lg">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}