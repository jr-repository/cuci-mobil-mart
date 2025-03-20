
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { useCart } from "./CartProvider";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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
          <span className="text-xl md:text-2xl font-bold text-royal-blue">CuciMart</span>
        </Link>

        {/* Desktop Navigation - Using NavigationMenu for modern look */}
        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  to="/"
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none",
                    isActive("/") 
                      ? "bg-blue-main/10 text-royal-blue" 
                      : "text-gray-700 hover:bg-blue-main/10 hover:text-royal-blue"
                  )}
                >
                  Beranda
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link
                  to="/shop"
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none",
                    isActive("/shop") 
                      ? "bg-blue-main/10 text-royal-blue" 
                      : "text-gray-700 hover:bg-blue-main/10 hover:text-royal-blue"
                  )}
                >
                  Toko
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link
                  to="/about"
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none",
                    isActive("/about") 
                      ? "bg-blue-main/10 text-royal-blue" 
                      : "text-gray-700 hover:bg-blue-main/10 hover:text-royal-blue"
                  )}
                >
                  Tentang Kami
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link
                  to="/contact"
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none",
                    isActive("/contact") 
                      ? "bg-blue-main/10 text-royal-blue" 
                      : "text-gray-700 hover:bg-blue-main/10 hover:text-royal-blue"
                  )}
                >
                  Kontak
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Cart and Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <Link 
            to="/checkout" 
            className="relative p-2 rounded-full bg-blue-main/10 hover:bg-blue-main/20 transition-colors text-royal-blue"
            aria-label="Keranjang Belanja"
          >
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-accent text-dark-blue text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-full bg-blue-main/10 hover:bg-blue-main/20 transition-colors text-royal-blue"
            aria-label={isMobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - with modern styling */}
      <div
        className={cn(
          "fixed inset-0 bg-white/95 backdrop-blur-sm z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-4 py-24">
          <nav className="flex flex-col space-y-6">
            <Link
              to="/"
              className={cn(
                "text-lg font-medium py-3 px-4 rounded-lg transition-colors",
                isActive("/") 
                  ? "bg-blue-main/10 text-royal-blue" 
                  : "text-gray-700 hover:bg-blue-main/10 hover:text-royal-blue"
              )}
            >
              Beranda
            </Link>
            
            <Link
              to="/shop"
              className={cn(
                "text-lg font-medium py-3 px-4 rounded-lg transition-colors",
                isActive("/shop") 
                  ? "bg-blue-main/10 text-royal-blue" 
                  : "text-gray-700 hover:bg-blue-main/10 hover:text-royal-blue"
              )}
            >
              Toko
            </Link>
            
            <Link
              to="/about"
              className={cn(
                "text-lg font-medium py-3 px-4 rounded-lg transition-colors",
                isActive("/about") 
                  ? "bg-blue-main/10 text-royal-blue" 
                  : "text-gray-700 hover:bg-blue-main/10 hover:text-royal-blue"
              )}
            >
              Tentang Kami
            </Link>
            
            <Link
              to="/contact"
              className={cn(
                "text-lg font-medium py-3 px-4 rounded-lg transition-colors",
                isActive("/contact") 
                  ? "bg-blue-main/10 text-royal-blue" 
                  : "text-gray-700 hover:bg-blue-main/10 hover:text-royal-blue"
              )}
            >
              Kontak
            </Link>
            
            <Link
              to="/checkout"
              className={cn(
                "text-lg font-medium py-3 px-4 rounded-lg transition-colors flex items-center",
                "bg-blue-main/10 text-royal-blue"
              )}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Keranjang
              {totalItems > 0 && (
                <span className="ml-2 bg-yellow-accent text-dark-blue text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
