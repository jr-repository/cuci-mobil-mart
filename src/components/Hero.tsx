
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section 
      className="pt-28 pb-12 relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1669133454455-798683c9d541?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay untuk memastikan teks tetap terbaca */}
      <div className="absolute inset-0 bg-dark-blue/60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <div className="animate-fade-in">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-yellow-accent text-dark-blue rounded-full mb-4">
                Toko Peralatan Cuci Mobil Terlengkap
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Bersihkan Mobil Anda dengan{" "}
                <span className="text-yellow-accent">Profesional</span>
              </h1>
              <p className="text-blue-100 text-lg mb-8 max-w-lg mx-auto md:mx-0">
                Temukan peralatan cuci mobil berkualitas tinggi untuk hasil yang profesional. Dijamin bersih, mengkilap, dan tahan lama.
              </p>
            </div>

            <div className="space-x-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Link
                to="/shop"
                className="inline-flex items-center px-6 py-3 bg-yellow-accent text-dark-blue font-medium rounded-md hover:bg-yellow-500 transition-colors"
              >
                Belanja Sekarang
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-white/20 text-white backdrop-blur-sm font-medium rounded-md hover:bg-white/30 transition-colors"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Car washing equipment"
                className="rounded-lg shadow-xl max-w-full h-auto animate-float"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-xl font-bold text-royal-blue">
                  100+
                </p>
                <p className="text-sm text-gray-600">
                  Produk Berkualitas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
