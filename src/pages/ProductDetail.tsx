
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShoppingCart, ArrowLeft, Star } from "lucide-react";
import { formatCurrency } from "@/utils/formatCurrency";
import { useCart } from "@/components/CartProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Product as ProductType } from "@/data/products";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  useEffect(() => {
    // Find the product by ID
    const foundProduct = products.find((p) => p.id.toString() === id);
    
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // Redirect to shop if product not found
      navigate("/shop");
    }
  }, [id, navigate]);

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-royal-blue"></div>
      </div>
    );
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }
  };

  // Calculate discounted price if available
  const finalPrice = product.discount 
    ? product.price * (1 - product.discount / 100) 
    : product.price;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 pt-28 pb-16">
        {/* Back button */}
        <button 
          onClick={handleGoBack}
          className="flex items-center text-gray-600 hover:text-royal-blue transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Kembali</span>
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative aspect-square overflow-hidden rounded-md">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              
              {/* Discount badge */}
              {product.discount && (
                <div className="absolute top-4 right-4 bg-yellow-accent text-dark-blue font-bold text-sm px-3 py-1 rounded-full">
                  -{product.discount}%
                </div>
              )}
            </div>
          </div>
          
          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-gray-500 text-sm">{product.category}</p>
              <h1 className="text-2xl font-bold mt-2">{product.name}</h1>
            </div>
            
            {/* Price section */}
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-royal-blue">
                {formatCurrency(finalPrice)}
              </span>
              
              {/* Display original price if discounted */}
              {product.discount && (
                <span className="text-lg text-gray-500 line-through">
                  {formatCurrency(product.price)}
                </span>
              )}
            </div>
            
            {/* Rating */}
            <div className="flex items-center">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-accent fill-yellow-accent" />
                <span className="font-medium ml-1">{product.rating}</span>
              </div>
              <span className="text-gray-500 ml-2">({product.reviews} ulasan)</span>
            </div>
            
            {/* Description */}
            <div>
              <h3 className="font-semibold mb-2">Deskripsi</h3>
              <p className="text-gray-700">{product.description || "Tidak ada deskripsi produk."}</p>
            </div>
            
            {/* Quantity selector */}
            <div className="flex items-center">
              <span className="mr-3">Jumlah:</span>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button 
                  className="px-3 py-2 text-gray-500 hover:text-royal-blue"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="px-3 py-2">{quantity}</span>
                <button 
                  className="px-3 py-2 text-gray-500 hover:text-royal-blue"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Add to cart button */}
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center w-full py-3 px-4 bg-royal-blue hover:bg-blue-800 text-white font-medium rounded-md transition-colors"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              <span>Tambahkan ke Keranjang</span>
            </button>
          </div>
        </div>
        
        {/* Additional sections could be added here (related products, reviews, etc.) */}
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
