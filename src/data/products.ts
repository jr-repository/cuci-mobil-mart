
export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  brand: string;
  isPopular: boolean;
  inStock: boolean;
  rating: number;
  reviews: number;
  tags: string[];
  discount?: number;
};

export type ProductCategory = {
  id: string;
  name: string;
  description: string;
};

export const categories: ProductCategory[] = [
  {
    id: "semua",
    name: "Semua Produk",
    description: "Lihat semua produk peralatan cuci mobil kami"
  },
  {
    id: "mesin",
    name: "Mesin Cuci",
    description: "Mesin cuci tekanan tinggi dan mesin cuci otomatis"
  },
  {
    id: "sampo",
    name: "Sampo & Deterjen",
    description: "Produk pembersih dan sampo khusus untuk mencuci mobil"
  },
  {
    id: "poles",
    name: "Poles & Wax",
    description: "Produk untuk memoles dan melapisi mobil"
  },
  {
    id: "aksesoris",
    name: "Aksesoris",
    description: "Berbagai aksesoris dan perlengkapan tambahan"
  },
  {
    id: "alat",
    name: "Alat Manual",
    description: "Alat-alat manual untuk mencuci dan membersihkan mobil"
  }
];

export const brands = [
  "Karcher",
  "Bosch",
  "3M",
  "Meguiar's",
  "Sonax",
  "Turtle Wax",
  "Chemical Guys",
  "CleanMaster",
  "AutoBrite",
  "IK Spray"
];

// All products data
const products: Product[] = [
  {
    id: 1,
    name: "High Pressure Washer Professional",
    price: 2450000,
    description: "Mesin cuci tekanan tinggi professional dengan daya 2100W, tekanan 160 bar, dan dilengkapi dengan berbagai nosel untuk kebutuhan pembersihan yang berbeda. Ideal untuk bisnis cuci mobil atau penggunaan rumah tangga intensif.",
    image: "/src/assets/images/products/pressure-washer.jpg",
    category: "mesin",
    brand: "Karcher",
    isPopular: true,
    inStock: true,
    rating: 4.8,
    reviews: 124,
    tags: ["tekanan tinggi", "profesional", "terbaik"]
  },
  {
    id: 2,
    name: "Sampo Mobil Premium Wax",
    price: 85000,
    description: "Sampo mobil dengan formula yang mengandung wax untuk membersihkan sekaligus memberikan kilau pada mobil Anda. Lembut pada cat mobil dan sangat efektif menghilangkan kotoran.",
    image: "/src/assets/images/products/car-shampoo.jpg",
    category: "sampo",
    brand: "Turtle Wax",
    isPopular: true,
    inStock: true,
    rating: 4.5,
    reviews: 89,
    tags: ["sampo", "wax", "2-in-1"]
  },
  {
    id: 3,
    name: "Microfiber Cloth Set (5 pcs)",
    price: 120000,
    description: "Set 5 kain microfiber berkualitas tinggi dengan warna berbeda untuk kebutuhan pembersihan yang berbeda. Sangat lembut, tidak meninggalkan goresan, dan memiliki daya serap air yang tinggi.",
    image: "/src/assets/images/products/microfiber.jpg",
    category: "aksesoris",
    brand: "Chemical Guys",
    isPopular: false,
    inStock: true,
    rating: 4.7,
    reviews: 215,
    tags: ["microfiber", "lap", "kain"]
  },
  {
    id: 4,
    name: "Car Polisher Electric",
    price: 1350000,
    description: "Mesin poles mobil elektrik dengan kecepatan yang dapat diatur, pegangan ergonomis, dan dilengkapi dengan pad poles berbagai ukuran. Sempurna untuk menghilangkan goresan halus dan mengkilapkan cat mobil.",
    image: "/src/assets/images/products/polisher.jpg",
    category: "poles",
    brand: "Bosch",
    isPopular: true,
    inStock: true,
    rating: 4.6,
    reviews: 78,
    tags: ["poles", "elektrik", "profesional"]
  },
  {
    id: 5,
    name: "Tire Shine Gel",
    price: 75000,
    description: "Gel pengkilap ban dengan formula tahan lama yang memberikan kilau wetlook pada ban. Tahan cuaca dan tidak mudah luntur saat terkena air.",
    image: "/src/assets/images/products/tire-gel.jpg",
    category: "poles",
    brand: "Meguiar's",
    isPopular: false,
    inStock: true,
    rating: 4.3,
    reviews: 62,
    tags: ["ban", "pengkilap", "gel"]
  },
  {
    id: 6,
    name: "Foam Cannon Sprayer",
    price: 350000,
    description: "Foam cannon sprayer untuk digunakan dengan mesin cuci tekanan tinggi. Menghasilkan busa tebal yang sempurna untuk tahap pre-wash saat mencuci mobil.",
    image: "/src/assets/images/products/foam-cannon.jpg",
    category: "aksesoris",
    brand: "Chemical Guys",
    isPopular: true,
    inStock: true,
    rating: 4.9,
    reviews: 143,
    tags: ["foam", "busa", "sprayer"]
  },
  {
    id: 7,
    name: "Interior Cleaner All Purpose",
    price: 95000,
    description: "Pembersih interior serbaguna untuk berbagai permukaan seperti plastik, vinil, dan kain. Membersihkan tanpa meninggalkan residu dan aman untuk semua material interior.",
    image: "/src/assets/images/products/interior-cleaner.jpg",
    category: "sampo",
    brand: "Sonax",
    isPopular: false,
    inStock: true,
    rating: 4.4,
    reviews: 57,
    tags: ["interior", "pembersih", "all-purpose"]
  },
  {
    id: 8,
    name: "Wash Mitt Premium Wool",
    price: 135000,
    description: "Sarung tangan cuci mobil dari wol premium yang sangat lembut pada permukaan cat. Menahan banyak air dan sampo, serta efektif mengangkat kotoran tanpa menggores.",
    image: "/src/assets/images/products/wash-mitt.jpg",
    category: "alat",
    brand: "AutoBrite",
    isPopular: false,
    inStock: true,
    rating: 4.6,
    reviews: 84,
    tags: ["sarung tangan", "wool", "premium"]
  },
  {
    id: 9,
    name: "Glass Cleaner Professional",
    price: 65000,
    description: "Pembersih kaca profesional dengan formula tanpa amonia yang membersihkan tanpa meninggalkan streak. Sempurna untuk kaca mobil, jendela, dan cermin.",
    image: "/src/assets/images/products/glass-cleaner.jpg",
    category: "sampo",
    brand: "3M",
    isPopular: false,
    inStock: true,
    rating: 4.5,
    reviews: 93,
    tags: ["kaca", "pembersih", "tanpa streak"]
  },
  {
    id: 10,
    name: "Detailing Brush Set",
    price: 180000,
    description: "Set sikat detailing berbagai ukuran untuk membersihkan area-area sulit seperti ventilasi AC, celah-celah interior, dan velg. Bulu sikat lembut namun efektif mengangkat kotoran.",
    image: "/src/assets/images/products/detail-brush.jpg",
    category: "alat",
    brand: "Chemical Guys",
    isPopular: false,
    inStock: true,
    rating: 4.7,
    reviews: 68,
    tags: ["sikat", "detailing", "set"]
  },
  {
    id: 11,
    name: "Car Vacuum Cleaner Wet & Dry",
    price: 850000,
    description: "Vacuum cleaner mobil dengan fungsi basah dan kering. Daya hisap kuat, dilengkapi berbagai attachment untuk menjangkau semua sudut interior mobil.",
    image: "/src/assets/images/products/vacuum.jpg",
    category: "mesin",
    brand: "Bosch",
    isPopular: true,
    inStock: true,
    rating: 4.8,
    reviews: 105,
    tags: ["vacuum", "penyedot", "basah & kering"]
  },
  {
    id: 12,
    name: "Ceramic Coating Kit",
    price: 1250000,
    description: "Kit coating keramik profesional yang memberikan perlindungan jangka panjang pada cat mobil. Tahan hingga 24 bulan, menolak air, dan memberikan kilau yang luar biasa.",
    image: "/src/assets/images/products/ceramic-coating.jpg",
    category: "poles",
    brand: "3M",
    isPopular: true,
    inStock: true,
    rating: 4.9,
    reviews: 76,
    tags: ["ceramic", "coating", "perlindungan"],
    discount: 15
  },
  {
    id: 13,
    name: "Pressure Sprayer Manual 2L",
    price: 125000,
    description: "Sprayer tekanan manual kapasitas 2 liter untuk aplikasi berbagai produk detailing seperti dressing ban, pembersih velg, atau pre-wash.",
    image: "/src/assets/images/products/sprayer.jpg",
    category: "alat",
    brand: "IK Spray",
    isPopular: false,
    inStock: true,
    rating: 4.4,
    reviews: 52,
    tags: ["sprayer", "manual", "tekanan"]
  },
  {
    id: 14,
    name: "Wheel Cleaner Iron Remover",
    price: 110000,
    description: "Pembersih velg dengan formula khusus yang dapat menghilangkan debu rem dan kontaminan besi. Berubah warna menjadi merah saat bereaksi dengan partikel besi.",
    image: "/src/assets/images/products/wheel-cleaner.jpg",
    category: "sampo",
    brand: "Sonax",
    isPopular: false,
    inStock: true,
    rating: 4.7,
    reviews: 64,
    tags: ["velg", "pembersih", "iron remover"]
  },
  {
    id: 15,
    name: "Car Dryer Blower",
    price: 1750000,
    description: "Mesin pengering mobil dengan aliran udara kuat untuk mengeringkan mobil tanpa menyentuh permukaan cat. Ideal untuk menghindari water spots dan goresan saat pengeringan.",
    image: "/src/assets/images/products/car-dryer.jpg",
    category: "mesin",
    brand: "CleanMaster",
    isPopular: true,
    inStock: true,
    rating: 4.8,
    reviews: 47,
    tags: ["pengering", "blower", "tanpa sentuh"]
  },
  {
    id: 16,
    name: "All Purpose Cleaner Concentrate",
    price: 120000,
    description: "Pembersih serbaguna konsentrat yang dapat diencerkan untuk berbagai tingkat pembersihan. Efektif untuk interior, eksterior, mesin, dan permukaan lainnya.",
    image: "/src/assets/images/products/all-purpose.jpg",
    category: "sampo",
    brand: "Chemical Guys",
    isPopular: false,
    inStock: true,
    rating: 4.6,
    reviews: 83,
    tags: ["pembersih", "konsentrat", "serbaguna"]
  },
  {
    id: 17,
    name: "Foam Applicator Pad (6 pcs)",
    price: 75000,
    description: "Set 6 pad aplikator busa untuk mengaplikasikan wax, sealant, dressing, atau produk perawatan lainnya. Lembut dan tidak meninggalkan goresan.",
    image: "/src/assets/images/products/applicator.jpg",
    category: "alat",
    brand: "Meguiar's",
    isPopular: false,
    inStock: true,
    rating: 4.5,
    reviews: 71,
    tags: ["pad", "aplikator", "busa"]
  },
  {
    id: 18,
    name: "Quick Detailer Spray",
    price: 95000,
    description: "Spray detailer cepat untuk membersihkan dan mengkilapkan mobil di antara pencucian utama. Aman untuk semua permukaan dan mengangkat debu ringan.",
    image: "/src/assets/images/products/quick-detailer.jpg",
    category: "poles",
    brand: "Turtle Wax",
    isPopular: false,
    inStock: true,
    rating: 4.4,
    reviews: 58,
    tags: ["detailer", "spray", "cepat"]
  },
  {
    id: 19,
    name: "Clay Bar Kit",
    price: 185000,
    description: "Kit clay bar untuk menghilangkan kontaminan yang menempel pada permukaan cat. Membuat permukaan cat halus seperti kaca sebelum polishing atau waxing.",
    image: "/src/assets/images/products/clay-bar.jpg",
    category: "poles",
    brand: "Meguiar's",
    isPopular: false,
    inStock: true,
    rating: 4.7,
    reviews: 62,
    tags: ["clay", "decontamination", "persiapan"]
  },
  {
    id: 20,
    name: "Water Spot Remover",
    price: 115000,
    description: "Penghilang water spot yang efektif menghilangkan bekas air keras pada permukaan cat dan kaca. Aman untuk semua jenis permukaan bila digunakan sesuai petunjuk.",
    image: "/src/assets/images/products/water-spot.jpg",
    category: "poles",
    brand: "3M",
    isPopular: false,
    inStock: true,
    rating: 4.5,
    reviews: 37,
    tags: ["water spot", "penghilang", "kaca"]
  },
  {
    id: 21,
    name: "Gantungan Kunci Microfiber",
    price: 35000,
    description: "Gantungan kunci dengan mini kain microfiber untuk membersihkan permukaan kecil seperti layar sentuh atau kacamata. Praktis dibawa kemana saja.",
    image: "/src/assets/images/products/key-chain.jpg",
    category: "aksesoris",
    brand: "AutoBrite",
    isPopular: false,
    inStock: true,
    rating: 4.2,
    reviews: 29,
    tags: ["gantungan kunci", "microfiber", "mini"]
  },
  {
    id: 22,
    name: "Portable Foam Washer",
    price: 275000,
    description: "Alat cuci foam portabel dengan tangki 5 liter. Dapat digunakan tanpa listrik, ideal untuk mencuci mobil di tempat tanpa akses air mengalir.",
    image: "/src/assets/images/products/foam-washer.jpg",
    category: "alat",
    brand: "CleanMaster",
    isPopular: false,
    inStock: true,
    rating: 4.6,
    reviews: 43,
    tags: ["portable", "foam", "tangki"]
  },
  {
    id: 23,
    name: "Leather Cleaner & Conditioner Set",
    price: 225000,
    description: "Set pembersih dan kondisioner untuk jok dan interior berbahan kulit. Membersihkan, melindungi, dan mempertahankan kelembutan kulit.",
    image: "/src/assets/images/products/leather-set.jpg",
    category: "sampo",
    brand: "Chemical Guys",
    isPopular: true,
    inStock: true,
    rating: 4.8,
    reviews: 76,
    tags: ["kulit", "conditioner", "perawatan"]
  },
  {
    id: 24,
    name: "Engine Bay Detailer",
    price: 110000,
    description: "Pembersih dan dressing khusus untuk ruang mesin. Membersihkan kotoran dan minyak sekaligus memberikan tampilan baru pada komponen mesin.",
    image: "/src/assets/images/products/engine-detailer.jpg",
    category: "sampo",
    brand: "Sonax",
    isPopular: false,
    inStock: true,
    rating: 4.5,
    reviews: 39,
    tags: ["mesin", "detailer", "dressing"]
  }
];

export default products;
