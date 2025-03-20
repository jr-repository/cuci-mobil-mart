
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/utils/formatCurrency";
import { useCart } from "./CartProvider";
import { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  className?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { addItem } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  // Calculate discounted price if available
  const finalPrice = product.discount 
    ? product.price * (1 - product.discount / 100) 
    : product.price;

  return (
    <Link
      to={`/shop/${product.id}`}
      className={cn(
        "group relative bg-white rounded-lg overflow-hidden shadow-md card-hover",
        className
      )}
    >
      {/* Product image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Discount badge */}
        {product.discount && (
          <div className="absolute top-2 right-2 bg-yellow-accent text-dark-blue font-bold text-xs px-2 py-1 rounded-full">
            -{product.discount}%
          </div>
        )}
        
        {/* Popular badge */}
        {product.isPopular && !product.discount && (
          <div className="absolute top-2 right-2 bg-royal-blue text-white font-bold text-xs px-2 py-1 rounded-full">
            Populer
          </div>
        )}
      </div>

      {/* Product details */}
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs font-medium text-gray-500">{product.category}</span>
        </div>
        <h3 className="text-sm font-semibold line-clamp-2 h-10 mb-1">{product.name}</h3>
        
        {/* Price section */}
        <div className="flex items-end gap-2">
          <span className="text-sm font-bold text-royal-blue">
            {formatCurrency(finalPrice)}
          </span>
          
          {/* Display original price if discounted */}
          {product.discount && (
            <span className="text-xs text-gray-500 line-through">
              {formatCurrency(product.price)}
            </span>
          )}
        </div>
        
        {/* Rating */}
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            <Star className="w-3 h-3 text-yellow-accent fill-yellow-accent" />
            <span className="text-xs font-medium ml-1">{product.rating}</span>
          </div>
          <span className="text-xs text-gray-500 ml-2">({product.reviews} ulasan)</span>
        </div>
      </div>

      {/* Add to cart button */}
      <button
        onClick={handleAddToCart}
        className="absolute bottom-4 right-4 p-2 rounded-full bg-blue-main text-white opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-royal-blue"
        aria-label="Tambah ke keranjang"
      >
        <ShoppingCart className="w-4 h-4" />
      </button>
    </Link>
  );
};

export default ProductCard;
