
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, CheckCircle, Clock, ShieldCheck, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-r from-royal-blue to-blue-main text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-yellow-accent text-dark-blue rounded-full mb-4">
                  Tentang Kami
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Kisah Kami Dalam Menyediakan Produk Cuci Mobil Terbaik
                </h1>
                <p className="text-blue-100">
                  CuciMart didirikan dengan visi untuk menyediakan peralatan cuci mobil berkualitas tinggi dengan harga terjangkau untuk semua orang.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/src/assets/images/about-hero.jpg" 
                  alt="Tim CuciMart" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-sm font-semibold text-blue-main uppercase tracking-wider">
                Cerita Kami
              </span>
              <h2 className="text-3xl font-bold mt-2 mb-6">
                Dari Hobi Menjadi Bisnis
              </h2>
              <p className="text-gray-600">
                CuciMart berawal dari hobi mencuci mobil yang dimiliki oleh pendiri kami. Berawal dari kesulitan menemukan peralatan cuci mobil berkualitas tinggi dengan harga terjangkau, ia memutuskan untuk memulai bisnis ini pada tahun 2015.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-main/10 text-blue-main rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Didirikan 2015</h3>
                <p className="text-gray-600">
                  Mulai sebagai toko kecil di Jakarta yang menjual peralatan cuci mobil impor.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-main/10 text-blue-main rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">20+ Staf Ahli</h3>
                <p className="text-gray-600">
                  Tim kami terdiri dari orang-orang yang berpengalaman dan bersemangat dalam dunia detailing mobil.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-main/10 text-blue-main rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">10+ Penghargaan</h3>
                <p className="text-gray-600">
                  Diakui sebagai salah satu distributor peralatan cuci mobil terbaik di Indonesia.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission and Vision */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <span className="text-sm font-semibold text-blue-main uppercase tracking-wider">
                  Misi & Visi
                </span>
                <h2 className="text-3xl font-bold mt-2 mb-6">
                  Apa yang Kami Yakini
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-main mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Misi Kami</h3>
                      <p className="text-gray-600">
                        Menyediakan produk perawatan dan pembersihan mobil terbaik dengan harga terjangkau untuk semua orang, sambil memberikan edukasi tentang perawatan mobil yang benar.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-main mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Visi Kami</h3>
                      <p className="text-gray-600">
                        Menjadi penyedia peralatan cuci mobil dan detailing terkemuka di Indonesia, dikenal atas kualitas produk, layanan pelanggan yang luar biasa, dan inovasi berkelanjutan.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-main mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Nilai Kami</h3>
                      <p className="text-gray-600">
                        Kami menjunjung tinggi kualitas, integritas, inovasi, dan kepuasan pelanggan dalam segala hal yang kami lakukan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <img 
                  src="/src/assets/images/mission-vision.jpg" 
                  alt="Showroom CuciMart" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-blue-main uppercase tracking-wider">
                Tim Kami
              </span>
              <h2 className="text-3xl font-bold mt-2 mb-4">
                Bertemu dengan Para Ahli
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tim kami terdiri dari para profesional yang berdedikasi dan berpengalaman dalam industri perawatan mobil.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-2 duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/src/assets/images/team-1.jpg" 
                    alt="Budi Santoso" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold mb-1">Budi Santoso</h3>
                  <p className="text-gray-600 text-sm mb-2">Pendiri & CEO</p>
                  <p className="text-gray-500 text-sm">
                    Budi memiliki pengalaman lebih dari 15 tahun dalam industri perawatan mobil.
                  </p>
                </div>
              </div>
              
              {/* Team Member 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-2 duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/src/assets/images/team-2.jpg" 
                    alt="Siti Rahayu" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold mb-1">Siti Rahayu</h3>
                  <p className="text-gray-600 text-sm mb-2">Manajer Operasional</p>
                  <p className="text-gray-500 text-sm">
                    Siti memastikan semua operasi berjalan lancar dan efisien.
                  </p>
                </div>
              </div>
              
              {/* Team Member 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-2 duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/src/assets/images/team-3.jpg" 
                    alt="Ahmad Hidayat" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold mb-1">Ahmad Hidayat</h3>
                  <p className="text-gray-600 text-sm mb-2">Pakar Produk</p>
                  <p className="text-gray-500 text-sm">
                    Ahmad adalah ahli dalam memilih produk berkualitas tinggi.
                  </p>
                </div>
              </div>
              
              {/* Team Member 4 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-2 duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/src/assets/images/team-4.jpg" 
                    alt="Dewi Putri" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold mb-1">Dewi Putri</h3>
                  <p className="text-gray-600 text-sm mb-2">Layanan Pelanggan</p>
                  <p className="text-gray-500 text-sm">
                    Dewi memastikan semua pelanggan mendapatkan pengalaman terbaik.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-blue-main uppercase tracking-wider">
                Keunggulan Kami
              </span>
              <h2 className="text-3xl font-bold mt-2 mb-4">
                Mengapa Memilih CuciMart?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kami menyediakan lebih dari sekadar produk. Kami menawarkan pengalaman dan solusi untuk kebutuhan perawatan mobil Anda.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-blue-main text-white rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Produk Berkualitas Tinggi</h3>
                  <p className="text-gray-600">
                    Semua produk kami dipilih dengan ketat untuk memastikan kualitas terbaik. Kami hanya menjual produk yang kami sendiri percaya dan gunakan.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-yellow-accent text-dark-blue rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Tim Ahli</h3>
                  <p className="text-gray-600">
                    Tim kami terdiri dari para ahli di bidang perawatan mobil yang siap memberikan saran dan rekomendasi terbaik untuk kebutuhan Anda.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-royal-blue text-white rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Berbagai Penghargaan</h3>
                  <p className="text-gray-600">
                    CuciMart telah menerima berbagai penghargaan dan pengakuan dalam industri perawatan mobil untuk kualitas produk dan layanan kami.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-main text-white rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Pengiriman Cepat</h3>
                  <p className="text-gray-600">
                    Kami mengerti pentingnya waktu, itulah mengapa kami berkomitmen untuk memproses dan mengirim pesanan Anda secepat mungkin.
                  </p>
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

export default About;
