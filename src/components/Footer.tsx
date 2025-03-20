
import React from "react";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  ChevronRight 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-dark-blue to-royal-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">CuciMart</h3>
            <p className="text-gray-200 text-sm">
              Toko peralatan dan perlengkapan cuci mobil terlengkap dengan kualitas terbaik dan harga terjangkau.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-accent transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-accent transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Link Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-yellow-accent transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  <span>Beranda</span>
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-200 hover:text-yellow-accent transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  <span>Toko</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-200 hover:text-yellow-accent transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  <span>Tentang Kami</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-yellow-accent transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  <span>Kontak</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Kategori Produk</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=mesin" className="text-gray-200 hover:text-yellow-accent transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  <span>Mesin Cuci</span>
                </Link>
              </li>
              <li>
                <Link to="/shop?category=sampo" className="text-gray-200 hover:text-yellow-accent transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  <span>Sampo & Deterjen</span>
                </Link>
              </li>
              <li>
                <Link to="/shop?category=poles" className="text-gray-200 hover:text-yellow-accent transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  <span>Poles & Wax</span>
                </Link>
              </li>
              <li>
                <Link to="/shop?category=aksesoris" className="text-gray-200 hover:text-yellow-accent transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  <span>Aksesoris</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-yellow-accent" />
                <span className="text-gray-200">
                  Jl. Raya Cuci Mobil No. 123, Jakarta Selatan, Indonesia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0 text-yellow-accent" />
                <span className="text-gray-200">+62 815-7363-5143</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0 text-yellow-accent" />
                <span className="text-gray-200">info@cucimart.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} CuciMart. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
