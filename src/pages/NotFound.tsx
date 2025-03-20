
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, FileQuestion } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileQuestion className="w-14 h-14 text-blue-main" />
            </div>
            
            <h1 className="text-5xl font-bold text-royal-blue mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-4">Halaman Tidak Ditemukan</h2>
            <p className="text-gray-600 mb-8">
              Maaf, halaman yang Anda cari tidak ditemukan atau mungkin telah dipindahkan.
            </p>
            
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-blue-main text-white font-medium rounded-md hover:bg-royal-blue transition-colors"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
