
# CuciMart - Toko Peralatan Cuci Mobil

CuciMart adalah website jual beli alat cuci mobil yang lengkap dan modern. Website ini dirancang dengan UI/UX yang menarik dan responsif di berbagai ukuran layar.

## Fitur Utama

- **Halaman Home**: Menampilkan landing page dengan paket-paket cuci mobil, fitur utama, dan produk populer
- **Halaman Shop**: Menampilkan produk dengan fitur filter, range harga, dan pencarian
- **Halaman Checkout**: Sistem checkout dengan integrasi WhatsApp
- **Halaman About**: Informasi tentang CuciMart
- **Halaman Contact**: Form kontak dan informasi kontak

## Teknologi yang Digunakan

- React
- TypeScript
- Tailwind CSS
- React Router
- ShadCN UI Components

## Struktur Folder

```
src/
├── assets/          # Berisi gambar dan aset lainnya
│   └── images/      # Folder untuk menyimpan gambar website
├── components/      # Komponen yang dapat digunakan kembali
├── data/            # Data produk, paket, dll.
├── pages/           # Halaman utama website
├── utils/           # Fungsi-fungsi utilitas
└── App.tsx          # Root component
```

## Panduan Edit Konten

### Cara Mengedit Produk

Untuk mengedit produk, buka file `src/data/products.ts`. Di sini Anda dapat:

1. Menambahkan produk baru dengan menambahkan objek ke array `products`
2. Mengubah data produk yang sudah ada
3. Menghapus produk dengan menghapus objek dari array

Contoh format produk:

```typescript
{
  id: 1,
  name: "High Pressure Washer Professional",
  price: 2450000,
  description: "Deskripsi produk",
  image: "/src/assets/images/products/pressure-washer.jpg",
  category: "mesin",
  brand: "Karcher",
  isPopular: true,
  inStock: true,
  rating: 4.8,
  reviews: 124,
  tags: ["tekanan tinggi", "profesional", "terbaik"]
}
```

### Cara Mengedit Paket

Untuk mengedit paket, buka file `src/data/packages.ts`. Di sini Anda dapat mengubah data paket yang ditampilkan di halaman Home.

### Cara Mengedit Gambar

1. Siapkan gambar baru yang ingin Anda gunakan
2. Simpan gambar ke folder `src/assets/images/` atau subfolder yang sesuai (contoh: `products/` untuk gambar produk)
3. Update referensi gambar di file data yang sesuai

### Cara Mengedit Konten Halaman

#### Halaman Home (Index.tsx)

Edit file `src/pages/Index.tsx` untuk mengubah:
- Hero section
- Bagian fitur/keunggulan
- Testimonial
- CTA section

#### Halaman Shop (Shop.tsx)

Edit file `src/pages/Shop.tsx` untuk mengubah:
- Judul dan deskripsi halaman
- Layout produk
- Filter dan kategori

#### Halaman About (About.tsx)

Edit file `src/pages/About.tsx` untuk mengubah:
- Cerita perusahaan
- Misi & visi
- Informasi tim
- Keunggulan

#### Halaman Contact (Contact.tsx)

Edit file `src/pages/Contact.tsx` untuk mengubah:
- Informasi kontak
- Alamat
- Jam operasional
- FAQ

### Cara Mengedit Informasi Footer

Edit file `src/components/Footer.tsx` untuk mengubah:
- Sosial media
- Alamat
- Nomor telepon
- Email
- Copyright

## Mengedit Tampilan

### Warna

Warna utama website dapat diubah di file `tailwind.config.ts` pada bagian `colors`. Website ini menggunakan palette warna:
- Blue Main: #89a4db
- Gray Main: #7b8389
- Dark Blue: #00011f
- Royal Blue: #112b68
- Yellow Accent: #f6d807

### Font dan Tipografi

Untuk mengubah font dan styling teks, Anda dapat mengedit file `src/index.css` dan menambahkan font baru di `tailwind.config.ts`.

### Responsivitas

Website sudah dirancang responsif dengan breakpoint:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## WhatsApp Checkout

Sistem checkout website ini terintegrasi dengan WhatsApp nomor 6281573635143. Saat user melakukan checkout, detil pesanan akan dikirim ke nomor tersebut.

Untuk mengubah nomor WhatsApp:
1. Buka file `src/pages/Checkout.tsx`
2. Cari variabel `whatsappUrl`
3. Ubah nomor pada URL tersebut

## Troubleshooting

### Gambar Tidak Muncul

1. Pastikan path gambar sudah benar
2. Periksa apakah gambar ada di folder yang sesuai
3. Jika mengupload gambar baru, pastikan format gambar didukung (JPG, PNG, WebP)

### Perubahan Tidak Muncul

1. Pastikan file sudah di-save
2. Refresh halaman browser
3. Bersihkan cache browser jika perlu

## Pengembangan Lanjutan

Untuk pengembangan lanjutan atau custom feature, Anda dapat menghubungi developer original atau mengikuti standar code yang sudah ada.
