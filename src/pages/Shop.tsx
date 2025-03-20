
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import PriceRangeSlider from "@/components/PriceRangeSlider";
import products, { categories, brands, Product } from "@/data/products";
import { 
  Filter, 
  SlidersHorizontal, 
  X, 
  ChevronDown,
  ChevronUp,
  Search,
  Package2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<{
    category: string;
    priceRange: [number, number];
    brands: string[];
    search: string;
  }>({
    category: searchParams.get("category") || "semua",
    priceRange: [0, 5000000],
    brands: [],
    search: searchParams.get("search") || "",
  });
  
  // State for collapsible sections
  const [collapsedSections, setCollapsedSections] = useState({
    categories: false,
    price: false,
    brands: false,
  });

  // Find min and max price in products
  const minPrice = 0;
  const maxPrice = Math.max(...products.map(p => p.price));

  // Toggle filter sidebar on mobile
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // Toggle collapse state for a section
  const toggleSection = (section: keyof typeof collapsedSections) => {
    setCollapsedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Update category filter
  const handleCategoryChange = (categoryId: string) => {
    setActiveFilters(prev => ({ ...prev, category: categoryId }));
    
    // Update URL params
    searchParams.set("category", categoryId);
    setSearchParams(searchParams);
  };

  // Update price range filter
  const handlePriceChange = (range: [number, number]) => {
    setActiveFilters(prev => ({ ...prev, priceRange: range }));
  };

  // Update brand filters
  const handleBrandChange = (brand: string, checked: boolean) => {
    setActiveFilters(prev => {
      const newBrands = checked
        ? [...prev.brands, brand]
        : prev.brands.filter(b => b !== brand);
      
      return { ...prev, brands: newBrands };
    });
  };

  // Handle search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setActiveFilters(prev => ({ ...prev, search: value }));
    
    // Update URL params if search is not empty
    if (value) {
      searchParams.set("search", value);
    } else {
      searchParams.delete("search");
    }
    setSearchParams(searchParams);
  };

  // Clear all filters
  const clearFilters = () => {
    setActiveFilters({
      category: "semua",
      priceRange: [minPrice, maxPrice],
      brands: [],
      search: "",
    });
    
    // Clear URL params
    setSearchParams({});
  };

  // Apply all filters
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (activeFilters.category && activeFilters.category !== "semua") {
      result = result.filter(
        product => product.category === activeFilters.category
      );
    }
    
    // Filter by price range
    result = result.filter(
      product => 
        product.price >= activeFilters.priceRange[0] && 
        product.price <= activeFilters.priceRange[1]
    );
    
    // Filter by brands
    if (activeFilters.brands.length > 0) {
      result = result.filter(product => 
        activeFilters.brands.includes(product.brand)
      );
    }
    
    // Filter by search term
    if (activeFilters.search) {
      const searchLower = activeFilters.search.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower) ||
          product.category.toLowerCase().includes(searchLower) ||
          product.brand.toLowerCase().includes(searchLower) ||
          product.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }
    
    setFilteredProducts(result);
  }, [activeFilters]);

  // Handle URL params on initial load
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const searchParam = searchParams.get("search");
    
    if (categoryParam || searchParam) {
      setActiveFilters(prev => ({
        ...prev,
        category: categoryParam || prev.category,
        search: searchParam || prev.search,
      }));
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Page Header */}
        <section className="bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center">Toko Peralatan Cuci Mobil</h1>
            <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
              Temukan semua kebutuhan peralatan dan perlengkapan cuci mobil berkualitas tinggi untuk hasil yang profesional.
            </p>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filter Sidebar - Desktop */}
              <aside className="lg:w-1/4 hidden lg:block">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold flex items-center">
                      <Filter className="w-5 h-5 mr-2" />
                      Filter Produk
                    </h2>
                    {(activeFilters.category !== "semua" || 
                      activeFilters.brands.length > 0 || 
                      activeFilters.search) && (
                      <button 
                        onClick={clearFilters}
                        className="text-sm text-royal-blue hover:underline"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                  
                  {/* Search Input */}
                  <div className="mb-6">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Cari produk..."
                        value={activeFilters.search}
                        onChange={handleSearchChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-main"
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                  
                  {/* Categories */}
                  <div className="mb-6 border-b border-gray-200 pb-6">
                    <div 
                      className="flex items-center justify-between cursor-pointer mb-4"
                      onClick={() => toggleSection("categories")}
                    >
                      <h3 className="font-semibold">Kategori</h3>
                      {collapsedSections.categories ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronUp className="w-4 h-4" />
                      )}
                    </div>
                    
                    {!collapsedSections.categories && (
                      <div className="space-y-2">
                        {categories.map(category => (
                          <div 
                            key={category.id}
                            className={`py-1 px-2 rounded-md cursor-pointer transition-colors ${
                              activeFilters.category === category.id 
                                ? "bg-blue-main text-white" 
                                : "hover:bg-gray-100"
                            }`}
                            onClick={() => handleCategoryChange(category.id)}
                          >
                            {category.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Price Range */}
                  <div className="mb-6 border-b border-gray-200 pb-6">
                    <div 
                      className="flex items-center justify-between cursor-pointer mb-4"
                      onClick={() => toggleSection("price")}
                    >
                      <h3 className="font-semibold">Rentang Harga</h3>
                      {collapsedSections.price ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronUp className="w-4 h-4" />
                      )}
                    </div>
                    
                    {!collapsedSections.price && (
                      <PriceRangeSlider
                        min={minPrice}
                        max={maxPrice}
                        onChange={handlePriceChange}
                        defaultValue={activeFilters.priceRange}
                      />
                    )}
                  </div>
                  
                  {/* Brands */}
                  <div className="mb-6">
                    <div 
                      className="flex items-center justify-between cursor-pointer mb-4"
                      onClick={() => toggleSection("brands")}
                    >
                      <h3 className="font-semibold">Brand</h3>
                      {collapsedSections.brands ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronUp className="w-4 h-4" />
                      )}
                    </div>
                    
                    {!collapsedSections.brands && (
                      <div className="space-y-2">
                        {brands.map(brand => (
                          <div key={brand} className="flex items-center space-x-2">
                            <Checkbox
                              id={`brand-${brand}`}
                              checked={activeFilters.brands.includes(brand)}
                              onCheckedChange={(checked) => 
                                handleBrandChange(brand, checked as boolean)
                              }
                            />
                            <label 
                              htmlFor={`brand-${brand}`}
                              className="text-sm cursor-pointer"
                            >
                              {brand}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </aside>

              {/* Product Grid */}
              <div className="lg:w-3/4">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  {/* Active filters & results count */}
                  <div>
                    <p className="text-gray-600">
                      Menampilkan {filteredProducts.length} produk
                    </p>
                    
                    {/* Active filters */}
                    {(activeFilters.category !== "semua" || 
                      activeFilters.brands.length > 0 || 
                      activeFilters.search) && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {activeFilters.category !== "semua" && (
                          <Badge 
                            className="bg-blue-main hover:bg-royal-blue"
                            onClick={() => handleCategoryChange("semua")}
                          >
                            Kategori: {categories.find(c => c.id === activeFilters.category)?.name}
                            <X className="ml-1 w-3 h-3" />
                          </Badge>
                        )}
                        
                        {activeFilters.brands.map(brand => (
                          <Badge 
                            key={brand}
                            className="bg-blue-main hover:bg-royal-blue"
                            onClick={() => handleBrandChange(brand, false)}
                          >
                            Brand: {brand}
                            <X className="ml-1 w-3 h-3" />
                          </Badge>
                        ))}
                        
                        {activeFilters.search && (
                          <Badge 
                            className="bg-blue-main hover:bg-royal-blue"
                            onClick={() => {
                              setActiveFilters(prev => ({ ...prev, search: "" }));
                              searchParams.delete("search");
                              setSearchParams(searchParams);
                            }}
                          >
                            Pencarian: {activeFilters.search}
                            <X className="ml-1 w-3 h-3" />
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* Mobile filter button */}
                  <button
                    onClick={toggleFilter}
                    className="lg:hidden flex items-center bg-blue-main text-white px-4 py-2 rounded-md"
                  >
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    Filter
                  </button>
                </div>
                
                {/* Empty state */}
                {filteredProducts.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <Package2 className="w-16 h-16 text-gray-300 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Tidak Ada Produk Ditemukan</h3>
                    <p className="text-gray-500 max-w-md mb-6">
                      Maaf, tidak ada produk yang sesuai dengan filter yang Anda pilih. Coba ubah filter atau cari produk lain.
                    </p>
                    <button 
                      onClick={clearFilters}
                      className="bg-blue-main text-white px-4 py-2 rounded-md hover:bg-royal-blue transition-colors"
                    >
                      Reset Filter
                    </button>
                  </div>
                )}
                
                {/* Products grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mobile Filter Sidebar */}
        <div 
          className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 lg:hidden ${
            isFilterOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div 
            className={`fixed inset-y-0 right-0 w-4/5 max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${
              isFilterOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter Produk
                </h2>
                <button 
                  onClick={toggleFilter}
                  className="p-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-4">
              {/* Search Input */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cari produk..."
                    value={activeFilters.search}
                    onChange={handleSearchChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-main"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
              
              {/* Categories */}
              <div className="mb-6 border-b border-gray-200 pb-6">
                <div 
                  className="flex items-center justify-between cursor-pointer mb-4"
                  onClick={() => toggleSection("categories")}
                >
                  <h3 className="font-semibold">Kategori</h3>
                  {collapsedSections.categories ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronUp className="w-4 h-4" />
                  )}
                </div>
                
                {!collapsedSections.categories && (
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div 
                        key={category.id}
                        className={`py-2 px-3 rounded-md cursor-pointer transition-colors ${
                          activeFilters.category === category.id 
                            ? "bg-blue-main text-white" 
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() => {
                          handleCategoryChange(category.id);
                          if (window.innerWidth < 768) toggleFilter();
                        }}
                      >
                        {category.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Price Range */}
              <div className="mb-6 border-b border-gray-200 pb-6">
                <div 
                  className="flex items-center justify-between cursor-pointer mb-4"
                  onClick={() => toggleSection("price")}
                >
                  <h3 className="font-semibold">Rentang Harga</h3>
                  {collapsedSections.price ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronUp className="w-4 h-4" />
                  )}
                </div>
                
                {!collapsedSections.price && (
                  <PriceRangeSlider
                    min={minPrice}
                    max={maxPrice}
                    onChange={handlePriceChange}
                    defaultValue={activeFilters.priceRange}
                  />
                )}
              </div>
              
              {/* Brands */}
              <div className="mb-6">
                <div 
                  className="flex items-center justify-between cursor-pointer mb-4"
                  onClick={() => toggleSection("brands")}
                >
                  <h3 className="font-semibold">Brand</h3>
                  {collapsedSections.brands ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronUp className="w-4 h-4" />
                  )}
                </div>
                
                {!collapsedSections.brands && (
                  <div className="space-y-3">
                    {brands.map(brand => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox
                          id={`mobile-brand-${brand}`}
                          checked={activeFilters.brands.includes(brand)}
                          onCheckedChange={(checked) => 
                            handleBrandChange(brand, checked as boolean)
                          }
                        />
                        <label 
                          htmlFor={`mobile-brand-${brand}`}
                          className="text-sm cursor-pointer"
                        >
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Action buttons */}
              <div className="flex gap-3 mt-8">
                <button
                  onClick={clearFilters}
                  className="flex-1 py-2 border border-gray-300 rounded-md text-gray-700 font-medium"
                >
                  Reset
                </button>
                <button
                  onClick={toggleFilter}
                  className="flex-1 py-2 bg-blue-main text-white rounded-md font-medium"
                >
                  Terapkan
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
