
import React, { useState } from "react";
import { useCart } from "./CartProvider";
import { formatCurrency } from "@/utils/formatCurrency";
import { Loader2, MessageCircle } from "lucide-react";

interface CheckoutFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  notes: string;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onSubmit }) => {
  const { items, totalPrice } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
  });

  // Handle form field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate processing time
    setTimeout(() => {
      onSubmit(formData);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
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
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-main"
          />
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
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-main"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nomor Telepon*
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-main"
          />
        </div>

        {/* City */}
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Kota*
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-main"
          />
        </div>

        {/* Postal Code */}
        <div>
          <label
            htmlFor="postalCode"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Kode Pos*
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-main"
          />
        </div>

        {/* Address - full width */}
        <div className="md:col-span-2">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Alamat Lengkap*
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-main"
          />
        </div>

        {/* Notes - full width */}
        <div className="md:col-span-2">
          <label
            htmlFor="notes"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Catatan (Opsional)
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-main"
          />
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-gray-50 p-4 rounded-md">
        <h3 className="text-lg font-semibold mb-4">Ringkasan Pesanan</h3>
        
        <div className="space-y-2 mb-4">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span className="font-medium">
                {formatCurrency(item.price * item.quantity)}
              </span>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between">
            <span className="font-semibold">Total</span>
            <span className="font-bold text-royal-blue">
              {formatCurrency(totalPrice)}
            </span>
          </div>
        </div>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors relative"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            <span>Memproses...</span>
          </>
        ) : (
          <>
            <MessageCircle className="w-5 h-5 mr-2" />
            <span>Checkout via WhatsApp</span>
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Dengan melakukan checkout, Anda setuju dengan syarat dan ketentuan kami.
      </p>
    </form>
  );
};

export default CheckoutForm;
