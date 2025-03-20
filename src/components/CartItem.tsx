
import React from "react";
import { Trash2, Plus, Minus } from "lucide-react";
import { formatCurrency } from "@/utils/formatCurrency";
import { useCart, CartItem as CartItemType } from "./CartProvider";

interface CartItemProps {
  item: CartItemType;
  showControls?: boolean;
}

const CartItem: React.FC<CartItemProps> = ({ item, showControls = true }) => {
  const { updateQuantity, removeItem } = useCart();

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeItem(item.id);
    }
  };

  return (
    <div className="flex items-center py-4 border-b border-gray-100">
      {/* Product image */}
      <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product info */}
      <div className="ml-4 flex-grow">
        <h4 className="text-sm font-medium">{item.name}</h4>
        <p className="text-sm font-bold text-royal-blue mt-1">
          {formatCurrency(item.price)}
        </p>
      </div>

      {/* Quantity controls */}
      {showControls && (
        <div className="flex items-center space-x-2">
          <button
            onClick={handleDecrease}
            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Kurangi jumlah"
          >
            <Minus className="w-4 h-4" />
          </button>
          
          <span className="w-8 text-center">{item.quantity}</span>
          
          <button
            onClick={handleIncrease}
            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Tambah jumlah"
          >
            <Plus className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => removeItem(item.id)}
            className="p-1 rounded-full bg-gray-100 hover:bg-red-100 hover:text-red-500 ml-2 transition-colors"
            aria-label="Hapus item"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      )}
      
      {/* Just show quantity without controls */}
      {!showControls && (
        <div className="flex items-center">
          <span className="text-sm text-gray-600">{item.quantity} x</span>
        </div>
      )}
    </div>
  );
};

export default CartItem;
