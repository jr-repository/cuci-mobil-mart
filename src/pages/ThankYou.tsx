
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowLeft, Home, ShoppingCart } from "lucide-react";

const ThankYou = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Terima Kasih atas Pesanan Anda!</h1>
            
            <p className="text-gray-600 mb-6">
              Pesanan Anda telah dikirim melalui WhatsApp. Kami akan segera memproses pesanan Anda dan menghubungi Anda untuk konfirmasi.
            </p>
            
            <div className="bg-gray-50 rounded-md p-6 mb-8">
              <h2 className="text-lg font-semibold mb-3">Langkah Selanjutnya</h2>
              <ul className="text-gray-600 text-left space-y-2">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-main text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">1</span>
                  <span>Tim kami akan menghubungi Anda melalui WhatsApp untuk mengkonfirmasi pesanan dan detail pengiriman.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-main text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">2</span>
                  <span>Anda akan menerima informasi pembayaran setelah konfirmasi pesanan.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-main text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">3</span>
                  <span>Setelah pembayaran dikonfirmasi, kami akan memproses dan mengirimkan pesanan Anda.</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center py-2 px-4 bg-blue-main text-white rounded-md font-medium hover:bg-royal-blue transition-colors"
              >
                <Home className="mr-2 w-4 h-4" />
                Kembali ke Beranda
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center justify-center py-2 px-4 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors"
              >
                <ShoppingCart className="mr-2 w-4 h-4" />
                Lanjutkan Belanja
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThankYou;
