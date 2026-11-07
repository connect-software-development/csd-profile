# Web Design Style Guide: Monochromatic Software Development Company Profile

Panduan gaya desain ini dirancang untuk pembuatan situs *company profile* perusahaan *software development*. Konsep ini mengadaptasi estetika dari Banham UK—yang menyoroti kemewahan, kejelasan struktur, tipografi tebal (bold), penggunaan *whitespace* yang luas, serta layout grid yang tegas—namun disesuaikan dengan skema warna monokromik hitam, putih, dan abu-abu.

---

## 1. Design Philosophy & Tone

*   **Tone & Mood:** Premium, Andal (*Trustworthy*), Presisi tinggi, Modern, Minimalis.
*   **Karakteristik Utamanya (Inspirasi dari Banham):**
    *   **Contrasting Elegance:** Kontras tinggi antara elemen hitam dan putih untuk memberikan kesan tegas dan profesional.
    *   **Grid-Based Structure:** Tata letak berbasis grid rapi dengan border/garis pembatas abu-abu tipis (*clean border dividers*).
    *   **Generous Whitespace:** Area kosong yang cukup untuk membiarkan teks dan visual "bernapas".
    *   **Typographic Hierarchy:** Penggunaan tipografi yang sangat tegas (*bold headers*) berdampingan dengan teks bodi yang bersih.

---

## 2. Color Palette (Monochrome)

Palet warna difokuskan pada skala abu-abu murni hingga hitam dan putih untuk menciptakan kesan modern dan *high-end*.

### Primary Colors
*   **Obsidian Black (`#0B0B0B`):** Warna latar belakang sekunder, warna teks utama pada latar terang, warna tombol *primary*.
*   **Pure White (`#FFFFFF`):** Warna latar belakang utama, teks pada latar gelap.

### Neutral & Accent Grays
*   **Off-Black / Charcoal (`#1A1A1A`):** Digunakan untuk komponen kartu (*cards*), *footer*, atau latar belakang bagian *dark mode/section*.
*   **Dark Gray (`#333333`):** Warna teks sekunder (*subtitles*, meta info).
*   **Medium Gray (`#707070`):** Teks penjelas (*caption*), *placeholder*, elemen *disabled*.
*   **Border Gray (`#E5E5E5`):** Garis pembatas tipis (*dividers*), *card borders*.
*   **Light Background Gray (`#F8F9FA`):** Latar belakang bagian alternating (*light section background*).

---

## 3. Typography

Tipografi mengombinasikan *sans-serif* bergaya industrial/modern yang bersih untuk memberikan kesan berteknologi tinggi namun tetap elegan.

### Font Family
*   **Primary Font (Headings):** `Inter`, `Plus Jakarta Sans`, atau `Space Grotesk` (Sans-Serif tebal dan presisi).
*   **Secondary Font (Body Text):** `Inter` atau `System UI` (Sangat mudah dibaca pada berbagai ukuran layar).
*   **Code / Monospace (Optional for Tech Accent):** `JetBrains Mono` atau `Fira Code`.

### Typography Scale & Specs

| Role | Font Weight | Desktop Size | Mobile Size | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title (H1)** | Bold (700) | 56px - 64px | 36px - 40px | 1.1 | -0.02em |
| **Section Header (H2)** | Semi-Bold (600) | 36px - 42px | 28px - 32px | 1.2 | -0.01em |
| **Card Header (H3)** | Medium (500) | 24px - 28px | 20px - 22px | 1.3 | 0em |
| **Subtitle / Lead** | Regular (400) | 18px - 20px | 16px - 18px | 1.5 | 0em |
| **Body Text** | Regular (400) | 16px | 15px | 1.6 | 0em |
| **Small / Caption** | Regular (400) | 14px | 13px | 1.4 | +0.01em |
| **Button Text** | Medium (500) | 14px - 16px | 14px | 1.0 | +0.05em (Uppercase) |

---

## 4. Layout & Grid System

Meniru kejelasan visual Banham dengan struktur kotak/grid yang terikat erat oleh garis tipis.

### Container & Margins
*   **Max Content Width:** `1280px`
*   **Grid:** 12-Column Grid (Desktop), 4-Column Grid (Mobile).
*   **Gutter:** `32px` (Desktop), `16px` (Mobile).
*   **Section Spacing (Padding Top/Bottom):**
    *   Large Section: `120px`
    *   Standard Section: `80px`
    *   Mobile Section: `48px`

### Card & Box Layout Style
*   **Borders:** `1px solid #E5E5E5` (Ringan dan bersih).
*   **Border Radius:** Subtle (`4px` atau `6px`). Hindari sudut yang terlalu bulat (*rounded*) untuk mempertahankan gaya arsitektural yang tegas.
*   **Shadows:** Sangat minimalis. Mengutamakan pemisahan garis (*border*) daripada *drop shadow* tebal.

---

## 5. UI Components & Style Guidelines

### A. Navigation Bar (Header)
*   **Style:** Minimalis dengan tingkat kontras tinggi.
*   **Background:** Solid White (`#FFFFFF`) dengan garis batas bawah tipis (`1px solid #E5E5E5`) atau Transparan yang berubah menjadi Solid saat di-scroll.
*   **Links:** Teks kapitalisasi kecil/normal dengan hover efek berupa garis bawah murni (*pure black bottom line*) yang teranimasi.
*   **CTA Button in Nav:** Hitam solid dengan teks putih.

### B. Buttons (Tombol)
1.  **Primary Button:**
    *   **Background:** `#0B0B0B` (Hitam)
    *   **Text:** `#FFFFFF` (Putih)
    *   **Hover:** `#333333` (Abu-abu Tua) atau inversi penuh (Latar Putih, Teks Hitam, Border Hitam).
    *   **Radius:** `4px`
    *   **Padding:** `14px 28px`
2.  **Secondary / Outline Button:**
    *   **Background:** Transparent
    *   **Border:** `1px solid #0B0B0B`
    *   **Text:** `#0B0B0B`
    *   **Hover:** `#0B0B0B` (Latar Hitam, Teks Putih)
3.  **Text Link Button (dengan Panah):**
    *   **Style:** Teks bercetak tebal dengan ikon panah (`→`) di sebelah kanan.
    *   **Hover Effect:** Panah bergeser sedikit ke kanan (+4px).

### C. Services & Portfolio Cards (Gaya Banham Block)
*   **Visual Style:** Kartu bergaya grid terpisah dengan garis tepi tipis (`#E5E5E5`).
*   **Hover State:** Kartu sedikit menggelap (misal dari latar putih ke `#F8F9FA`) atau penambahan ketebalan garis tepi.
*   **Content:**
    *   Nomor indeks (misal: `01/`, `02/`) menggunakan warna abu-abu (`#707070`).
    *   Judul layanan dalam cetak tebal.
    *   Deskripsi singkat.
    *   Ikon garis sederhana (*line icons*) berbasis monokrom.

### D. Dark Section Highlight (Contrast Section)
*   Menggunakan bagian berlatar belakang gelap (`#0B0B0B` atau `#1A1A1A`) secara bergantian dengan bagian putih untuk memberikan ritme visual dan penekanan pada informasi penting (seperti *Stats*, *Client Showcase*, atau *Final CTA*).
*   **Teks:** Putih (`#FFFFFF`) & Abu-abu Terang (`#E5E5E5`).

---

## 6. Imagery & Graphics Style

*   **Software & Tech Imagery:**
    *   Mockup aplikasi/software dalam format *high-contrast dark mode* atau *monochrome wireframes*.
    *   Foto tim & kantor dibuat dalam format Hitam-Putih (*Black & White / Grayscale*) berkualitas tinggi dengan kontras yang tajam.
*   **Abstract Graphics:**
    *   Penggunaan pola garis geometris murni, visualisasi arsitektur kode (*system architecture diagrams*) yang bersih.
    *   Hindari gradasi warna-warni (neon, RGB) khas startup biasa. Tetap gunakan gradasi monokrom (*grayscale gradient*).

---

## 7. Motion & Animations (Micro-interactions)

*   **Transitions:** Cepat dan presisi (`cubic-bezier(0.16, 1, 0.3, 1)` dengan durasi `300ms - 400ms`).
*   **Scroll Animations:** *Fade-up* tipis (pergeseran `20px` ke atas saat elemen masuk ke viewport).
*   **Image Zoom:** *Subtle zoom-in* (`scale(1.03)`) pada gambar kartu saat kursor di-hover.

---

## 8. Example Application Structure (Page Blueprint)

1.  **Hero Section (Light Background):**
    *   H1 Bold: *"Engineering Precise Software Solutions."*
    *   Sub-headline monokrom murni + Tombol CTA Hitam.
    *   Visual: Mockup arsitektur software monokromik berukuran besar.
2.  **Client Logos / Trust Bar:**
    *   Logo klien ditampilkan penuh dalam warna abu-abu netral / hitam (*Grayscale logos*).
3.  **Services Grid (4-Column Layout with Borders):**
    *   Bentuk grid tegas memisahkan: *Custom Software*, *Cloud Architecture*, *AI Integration*, *Enterprise Systems*.
4.  **Featured Project Case Study (Dark Background Section):**
    *   Transisi dramatis ke warna hitam murni (`#0B0B0B`).
    *   Studi kasus utama dengan statistik numerik besar (contoh: `99.99%`, `10x`).
5.  **Tech Stack & Methodology (Accordion / Clean List):**
    *   Daftar bersih dengan garis pemisah (*horizontal dividers* `#E5E5E5`).
6.  **Footer (Solid Dark / Black):**
    *   Grid 4 kolom: Navigasi, Lokasi Kantor, Kontak, & Hak Cipta.