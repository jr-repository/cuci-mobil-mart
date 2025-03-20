
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { useCart } from "./CartProvider";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();
  const isMobile = useIsMobile();

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

  // Menu items for both mobile and desktop
  const menuItems = [
    { path: "/", label: "Beranda" },
    { path: "/shop", label: "Toko" },
    { path: "/about", label: "Tentang Kami" },
    { path: "/contact", label: "Kontak" },
  ];

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

        {/* Desktop Navigation - Simple and clean */}
        <nav className="hidden md:flex items-center space-x-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                isActive(item.path)
                  ? "bg-blue-main/10 text-royal-blue"
                  : "text-gray-700 hover:bg-blue-main/10 hover:text-royal-blue"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

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
          
          {/* Mobile Menu using Sheet from shadcn/ui */}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="p-2 rounded-full bg-blue-main/10 hover:bg-blue-main/20 transition-colors text-royal-blue md:hidden"
                  aria-label="Menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[75vw] sm:max-w-sm">
                <SheetHeader className="mb-6">
                  <SheetTitle className="text-royal-blue">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <SheetClose asChild key={item.path}>
                      <Link
                        to={item.path}
                        className={cn(
                          "text-lg font-medium py-3 px-4 rounded-lg transition-colors flex items-center",
                          isActive(item.path)
                            ? "bg-blue-main/10 text-royal-blue"
                            : "text-gray-700 hover:bg-blue-main/10 hover:text-royal-blue"
                        )}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Link
                      to="/checkout"
                      className="text-lg font-medium py-3 px-4 rounded-lg transition-colors flex items-center bg-blue-main/10 text-royal-blue"
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Keranjang
                      {totalItems > 0 && (
                        <span className="ml-2 bg-yellow-accent text-dark-blue text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                          {totalItems}
                        </span>
                      )}
                    </Link>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
