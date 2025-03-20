
export type Package = {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  recommended: boolean;
  popular: boolean;
  icon: string;
  color: string;
};

const packages: Package[] = [
  {
    id: 1,
    name: "Paket Pemula",
    price: 450000,
    description: "Paket dasar untuk pemula yang baru memulai bisnis cuci mobil atau penggunaan pribadi",
    features: [
      "Sampo Mobil Premium 500ml",
      "2 Kain Microfiber",
      "Spons Cuci Mobil",
      "Manual Spray Bottle"
    ],
    recommended: false,
    popular: false,
    icon: "package",
    color: "bg-blue-main"
  },
  {
    id: 2,
    name: "Paket Standard",
    price: 1250000,
    description: "Paket lengkap untuk kebutuhan pencucian mobil reguler dan perawatan dasar",
    features: [
      "Semua yang ada di Paket Pemula",
      "Pressure Washer Mini",
      "Foam Cannon Attachment",
      "Quick Detailer Spray 500ml",
      "Tire Shine Gel 250ml",
      "Interior Cleaner 500ml"
    ],
    recommended: true,
    popular: true,
    icon: "star",
    color: "bg-royal-blue"
  },
  {
    id: 3,
    name: "Paket Professional",
    price: 3800000,
    description: "Paket profesional untuk bisnis cuci mobil atau penghobi detailing",
    features: [
      "Semua yang ada di Paket Standard",
      "High Pressure Washer Professional",
      "Vacuum Cleaner Wet & Dry",
      "Polisher Machine",
      "Ceramic Coating Kit",
      "Complete Microfiber Set (10pcs)",
      "Detailing Brushes Set",
      "Clay Bar Kit",
      "All Purpose Cleaner Concentrate"
    ],
    recommended: false,
    popular: false,
    icon: "diamond",
    color: "bg-yellow-accent"
  },
  {
    id: 4,
    name: "Paket Hemat",
    price: 750000,
    description: "Paket ekonomis untuk pengguna rumahan dengan kebutuhan dasar",
    features: [
      "Sampo Mobil Regular 500ml",
      "3 Kain Microfiber",
      "Spons Cuci Mobil",
      "Glass Cleaner 250ml",
      "Tire Shine 250ml",
      "Manual Pressure Sprayer 2L"
    ],
    recommended: false,
    popular: false,
    icon: "piggy-bank",
    color: "bg-gray-main"
  }
];

export default packages;
