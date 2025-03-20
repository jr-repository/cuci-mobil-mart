
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartItem from "@/components/CartItem";
import CheckoutForm from "@/components/CheckoutForm";
import { useCart } from "@/components/CartProvider";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { formatCurrency } from "@/utils/formatCurrency";

const Checkout = () => {
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const handleFormSubmit = (formData: any) => {
    setIsSubmitting(true);
    
    // Prepare products list for WhatsApp message
    const productsList = items
      .map(item => `${item.name} (${item.quantity}x) - ${formatCurrency(item.price * item.quantity)}`)
      .join("%0A");
    
    // Create WhatsApp message
    const message = `*Pesanan Baru dari CuciMart*%0A%0A` +
      `*Informasi Pelanggan*%0A` +
      `Nama: ${formData.name}%0A` +
      `Alamat: ${formData.address}%0A%0A` +
      `*Detail Pesanan*%0A` +
      `${productsList}%0A%0A` +
      `*Total: ${formatCurrency(totalPrice)}*%0A%0A` +
      `${formData.notes ? `*Catatan:* ${formData.notes}%0A%0A` : ""}` +
      `Terima kasih telah berbelanja di CuciMart!`;
    
    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/6281573635143?text=${message}`;
    
    // Clear cart after successful checkout
    clearCart();
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
    
    // Navigate to thank you page
    navigate("/checkout/thank-you");
  };

  // If cart is empty, show empty state
  if (totalItems === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow flex items-center justify-center py-24">
          <div className="text-center max-w-md px-4">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-12 h-12 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Keranjang Anda Kosong</h1>
            <p className="text-gray-600 mb-8">
              Sepertinya Anda belum menambahkan produk apapun ke keranjang belanja.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center px-6 py-3 bg-blue-main text-white font-medium rounded-md hover:bg-royal-blue transition-colors"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Lanjutkan Belanja
            </Link>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Ringkasan Pesanan
                </h2>
                
                <div className="border-t border-gray-100 mb-4">
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
                
                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">{formatCurrency(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Biaya Pengiriman</span>
                    <span className="text-green-600">Gratis</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-100">
                    <span>Total</span>
                    <span className="text-royal-blue">{formatCurrency(totalPrice)}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link
                    to="/shop"
                    className="inline-flex items-center w-full justify-center py-2 px-4 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Lanjutkan Belanja
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Checkout Form */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">Informasi Pengiriman</h2>
                <CheckoutForm onSubmit={handleFormSubmit} />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
