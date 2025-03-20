
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "./CartProvider";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  // Check if current path matches the link
  const isActive = (path: string) => location.pathname === path;

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-royal-blue">CuciMart</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-royal-blue",
              isActive("/") ? "navbar-active" : "text-gray-800"
            )}
          >
            Beranda
          </Link>
          <Link
            to="/shop"
            className={cn(
              "text-sm font-medium transition-colors hover:text-royal-blue",
              isActive("/shop") ? "navbar-active" : "text-gray-800"
            )}
          >
            Toko
          </Link>
          <Link
            to="/about"
            className={cn(
              "text-sm font-medium transition-colors hover:text-royal-blue",
              isActive("/about") ? "navbar-active" : "text-gray-800"
            )}
          >
            Tentang Kami
          </Link>
          <Link
            to="/contact"
            className={cn(
              "text-sm font-medium transition-colors hover:text-royal-blue",
              isActive("/contact") ? "navbar-active" : "text-gray-800"
            )}
          >
            Kontak
          </Link>
        </nav>

        {/* Cart and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <Link 
            to="/checkout" 
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Keranjang Belanja"
          >
            <ShoppingCart className="w-5 h-5 text-royal-blue" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-accent text-dark-blue text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label={isMobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-royal-blue" />
            ) : (
              <Menu className="w-5 h-5 text-royal-blue" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out pt-20",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="container mx-auto px-4 flex flex-col space-y-6 py-8">
          <Link
            to="/"
            className={cn(
              "text-lg font-medium py-2 border-b border-gray-100",
              isActive("/") ? "text-royal-blue" : "text-gray-800"
            )}
          >
            Beranda
          </Link>
          <Link
            to="/shop"
            className={cn(
              "text-lg font-medium py-2 border-b border-gray-100",
              isActive("/shop") ? "text-royal-blue" : "text-gray-800"
            )}
          >
            Toko
          </Link>
          <Link
            to="/about"
            className={cn(
              "text-lg font-medium py-2 border-b border-gray-100",
              isActive("/about") ? "text-royal-blue" : "text-gray-800"
            )}
          >
            Tentang Kami
          </Link>
          <Link
            to="/contact"
            className={cn(
              "text-lg font-medium py-2 border-b border-gray-100",
              isActive("/contact") ? "text-royal-blue" : "text-gray-800"
            )}
          >
            Kontak
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
