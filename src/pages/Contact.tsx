
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Check,
  Loader2
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  
  // Handle form field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Nama harus diisi";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email harus diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Pesan harus diisi";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-r from-royal-blue to-blue-main text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Hubungi Kami
            </h1>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Punya pertanyaan tentang produk kami atau butuh bantuan? Tim kami siap membantu Anda dengan segala kebutuhan perawatan mobil Anda.
            </p>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Contact Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform hover:-translate-y-2 duration-300">
                <div className="w-16 h-16 bg-blue-main text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Telepon Kami</h3>
                <p className="text-gray-600 mb-3">
                  Senin - Sabtu: 08.00 - 17.00 WIB
                </p>
                <a 
                  href="tel:+6281573635143" 
                  className="text-royal-blue hover:underline font-medium"
                >
                  +62 815-7363-5143
                </a>
              </div>
              
              {/* Contact Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform hover:-translate-y-2 duration-300">
                <div className="w-16 h-16 bg-royal-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Kami</h3>
                <p className="text-gray-600 mb-3">
                  Respon dalam 24 jam kerja
                </p>
                <a 
                  href="mailto:info@cucimart.com" 
                  className="text-royal-blue hover:underline font-medium"
                >
                  info@cucimart.com
                </a>
              </div>
              
              {/* Contact Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform hover:-translate-y-2 duration-300">
                <div className="w-16 h-16 bg-yellow-accent text-dark-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Kunjungi Kami</h3>
                <p className="text-gray-600 mb-3">
                  Showroom & Kantor Pusat
                </p>
                <address className="not-italic text-royal-blue font-medium">
                  Jl. Raya Cuci Mobil No. 123<br />
                  Jakarta Selatan, Indonesia
                </address>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                      Pesan Terkirim!
                    </h3>
                    <p className="text-green-700">
                      Terima kasih telah menghubungi kami. Kami akan merespon pesan Anda segera.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Nama Lengkap*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-main ${
                            errors.name ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                        )}
                      </div>
                      
                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-main ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>
                      
                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Nomor Telepon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-main"
                        />
                      </div>
                      
                      {/* Subject */}
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Subjek
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-main"
                        />
                      </div>
                    </div>
                    
                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Pesan*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-main ${
                          errors.message ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                      )}
                    </div>
                    
                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-blue-main text-white font-medium rounded-md hover:bg-royal-blue transition-colors disabled:opacity-70 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          <span>Mengirim...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          <span>Kirim Pesan</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
              
              {/* Map & Business Hours */}
              <div className="space-y-8">
                {/* Map */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-6">Lokasi Kami</h2>
                  <div className="w-full h-80 bg-gray-200 rounded-md overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126916.63167366761!2d106.7271957565059!3d-6.2295298991225855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%20Selatan%2C%20Jakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1653581546621!5m2!1sen!2sus" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy"
                      title="Lokasi CuciMart"
                    ></iframe>
                  </div>
                </div>
                
                {/* Business Hours */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Clock className="w-6 h-6 mr-2 text-blue-main" />
                    Jam Operasional
                  </h2>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between pb-2 border-b border-gray-100">
                      <span className="font-medium">Senin - Jumat</span>
                      <span>08:00 - 17:00 WIB</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-gray-100">
                      <span className="font-medium">Sabtu</span>
                      <span>09:00 - 15:00 WIB</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-gray-100">
                      <span className="font-medium">Minggu</span>
                      <span className="text-red-500">Tutup</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-gray-100">
                      <span className="font-medium">Hari Libur Nasional</span>
                      <span className="text-red-500">Tutup</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-50 rounded-md border border-yellow-100">
                    <p className="text-sm text-yellow-800">
                      <strong>Catatan:</strong> Jam operasional dapat berubah pada hari libur atau acara khusus. Silakan hubungi kami untuk konfirmasi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-blue-main uppercase tracking-wider">
                FAQ
              </span>
              <h2 className="text-3xl font-bold mt-2 mb-4">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Berikut adalah beberapa pertanyaan yang sering diajukan oleh pelanggan kami. Jika Anda tidak menemukan jawaban yang Anda cari, silakan hubungi kami.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Berapa lama waktu pengiriman?</h3>
                <p className="text-gray-600">
                  Waktu pengiriman tergantung pada lokasi Anda. Untuk wilayah Jakarta dan sekitarnya, pengiriman biasanya memakan waktu 1-2 hari kerja. Untuk wilayah luar Jakarta, pengiriman dapat memakan waktu 3-5 hari kerja.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Apakah ada biaya pengiriman?</h3>
                <p className="text-gray-600">
                  Ya, biaya pengiriman tergantung pada lokasi dan berat paket. Namun, kami menawarkan pengiriman gratis untuk pembelian di atas Rp 500.000 ke seluruh Indonesia.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Bagaimana jika produk yang saya terima rusak?</h3>
                <p className="text-gray-600">
                  Kami memiliki kebijakan pengembalian 7 hari. Jika produk yang Anda terima rusak atau tidak sesuai dengan deskripsi, silakan hubungi kami dalam waktu 7 hari setelah penerimaan untuk penggantian atau pengembalian dana.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Apakah CuciMart memiliki toko fisik?</h3>
                <p className="text-gray-600">
                  Ya, kami memiliki toko fisik dan showroom di Jakarta Selatan. Anda dapat mengunjungi kami untuk melihat dan mencoba produk-produk kami secara langsung.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Apakah CuciMart menyediakan layanan cuci mobil?</h3>
                <p className="text-gray-600">
                  Tidak, CuciMart hanya menjual peralatan dan perlengkapan cuci mobil. Kami tidak menyediakan layanan cuci mobil secara langsung. Namun, kami dapat merekomendasikan mitra cuci mobil terpercaya di area Anda.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
