
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PackageCard from "@/components/PackageCard";
import ProductCard from "@/components/ProductCard";
import packages from "@/data/packages";
import products from "@/data/products";
import { ArrowRight, CheckCircle2, ShieldCheck, Truck, Users } from "lucide-react";

const Index = () => {
  // Filter only popular products
  const popularProducts = products.filter(product => product.isPopular).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Mengapa Memilih CuciMart?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kami menyediakan peralatan cuci mobil berkualitas tinggi dengan harga terbaik dan pelayanan yang memuaskan.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform hover:-translate-y-2 duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-main/10 text-blue-main mb-4">
                  <Truck className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Pengiriman Cepat</h3>
                <p className="text-gray-600 text-sm">
                  Pengiriman cepat ke seluruh Indonesia dengan jasa pengiriman terpercaya.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform hover:-translate-y-2 duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-main/10 text-blue-main mb-4">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Produk Berkualitas</h3>
                <p className="text-gray-600 text-sm">
                  Semua produk kami dipilih dengan ketat untuk memastikan kualitas terbaik.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform hover:-translate-y-2 duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-main/10 text-blue-main mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Garansi Produk</h3>
                <p className="text-gray-600 text-sm">
                  Setiap produk memiliki garansi untuk memastikan kepuasan Anda.
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform hover:-translate-y-2 duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-main/10 text-blue-main mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Layanan Pelanggan</h3>
                <p className="text-gray-600 text-sm">
                  Tim kami siap membantu Anda dengan pertanyaan dan kebutuhan Anda.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Package Section - Similar to hosting packages */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-blue-main uppercase tracking-wider">
                Pilihan Paket
              </span>
              <h2 className="text-3xl font-bold mt-2 mb-4">
                Paket Peralatan Cuci Mobil
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kami menyediakan berbagai paket peralatan cuci mobil untuk memenuhi kebutuhan Anda, dari pemula hingga profesional.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {packages.map((pkg) => (
                <PackageCard key={pkg.id} package={pkg} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Popular Products */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
              <div>
                <span className="text-sm font-semibold text-blue-main uppercase tracking-wider">
                  Produk Populer
                </span>
                <h2 className="text-3xl font-bold mt-2">
                  Produk Terlaris Kami
                </h2>
              </div>
              <Link 
                to="/shop" 
                className="inline-flex items-center mt-4 md:mt-0 text-royal-blue font-medium hover:text-blue-main transition-colors"
              >
                Lihat Semua Produk
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section 
          className="py-20 bg-gradient-to-r from-royal-blue to-blue-main text-white"
          style={{
            backgroundImage: "url('/src/assets/images/testimonial-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Apa Kata Pelanggan Kami</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Dengarkan pengalaman dari pelanggan yang telah menggunakan produk-produk kami.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 animate-fade-in" style={{ animationDelay: "0s" }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                    <img src="/src/assets/images/testimonial-1.jpg" alt="Budi Santoso" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Budi Santoso</h4>
                    <p className="text-sm text-blue-100">Pengusaha Cuci Mobil</p>
                  </div>
                </div>
                <p className="italic">
                  "Saya menggunakan mesin cuci tekanan tinggi dari CuciMart dan sangat puas dengan kualitasnya. Mesin ini tahan lama dan powernya luar biasa!"
                </p>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                    <img src="/src/assets/images/testimonial-2.jpg" alt="Siti Rahayu" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Siti Rahayu</h4>
                    <p className="text-sm text-blue-100">Pengguna Rumahan</p>
                  </div>
                </div>
                <p className="italic">
                  "Produk-produk dari CuciMart sangat berkualitas dan harganya terjangkau. Saya sangat senang dengan hasil pencucian mobil saya sekarang!"
                </p>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                    <img src="/src/assets/images/testimonial-3.jpg" alt="Ahmad Hidayat" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Ahmad Hidayat</h4>
                    <p className="text-sm text-blue-100">Detailer Profesional</p>
                  </div>
                </div>
                <p className="italic">
                  "Sebagai detailer profesional, saya sangat teliti dalam memilih produk. CuciMart menyediakan semua kebutuhan detailing saya dengan kualitas yang luar biasa."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-blue-main rounded-xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-8 md:p-12 flex items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                      Siap Membuat Mobil Anda Bersih dan Mengkilap?
                    </h2>
                    <p className="text-blue-100 mb-8">
                      Kunjungi toko kami sekarang dan temukan berbagai peralatan cuci mobil berkualitas tinggi untuk hasil yang profesional.
                    </p>
                    <Link
                      to="/shop"
                      className="inline-flex items-center px-6 py-3 bg-yellow-accent text-dark-blue font-medium rounded-md hover:bg-yellow-500 transition-colors"
                    >
                      Belanja Sekarang
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/2 relative">
                  <img
                    src="/src/assets/images/cta-image.jpg"
                    alt="Man washing car"
                    className="w-full h-full object-cover object-center"
                    style={{ minHeight: "300px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
