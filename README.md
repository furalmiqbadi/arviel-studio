# Arviel Studio Website

Website resmi untuk **Arviel Studio** - Studio pengembangan game dan aplikasi dengan layanan agensi content creator.

## 🚀 Fitur Utama

- **Game Development** - Pengembangan game mobile dan PC berkualitas tinggi
- **App Development** - Solusi aplikasi custom untuk bisnis Anda
- **Content Creator Agency** - Manajemen dan pengembangan content creator

## 📁 Struktur Proyek

```
arviel-studio/
├── index.html              # Halaman utama
├── css/
│   ├── style.css          # Design system & base styles
│   └── components.css     # Component styles
├── js/
│   └── app.js             # Application logic
├── database/
│   ├── services.json      # Data layanan
│   ├── portfolio.json     # Data portfolio
│   ├── creators.json      # Data content creator
│   └── contacts.json      # Data kontak
└── README.md              # File ini
```

## 🎨 Teknologi

- **HTML5** - Struktur semantik
- **CSS3** - Design system dengan glassmorphism
- **JavaScript (ES6+)** - Dynamic content loading
- **JSON** - File-based database

## 💻 Cara Menggunakan

### Membuka Website

Buka file `index.html` di browser modern (Chrome, Firefox, Edge, Safari).

### Update Konten

#### Menambah Layanan

Edit `database/services.json`:

```json
{
  "id": 4,
  "title": "Layanan Baru",
  "description": "Deskripsi layanan",
  "icon": "🎯",
  "category": "kategori",
  "features": ["Fitur 1", "Fitur 2", "Fitur 3"]
}
```

#### Menambah Portfolio

Edit `database/portfolio.json`:

```json
{
  "id": 7,
  "title": "Proyek Baru",
  "description": "Deskripsi proyek",
  "image": "nama-file.jpg",
  "category": "games",
  "platform": "Mobile",
  "featured": true,
  "technologies": ["Unity", "C#"],
  "link": "#"
}
```

#### Menambah Content Creator

Edit `database/creators.json`:

```json
{
  "id": 7,
  "name": "Nama Creator",
  "description": "Deskripsi creator",
  "image": "avatar.jpg",
  "platform": "YouTube",
  "followers": 100000,
  "category": "gaming",
  "verified": true,
  "socialLinks": {
    "youtube": "https://youtube.com/@username",
    "instagram": "https://instagram.com/username"
  }
}
```

## 🎨 Kustomisasi Design

### Mengubah Warna

Edit `css/style.css` bagian `:root`:

```css
:root {
  --color-primary: #6366f1; /* Warna utama */
  --color-secondary: #ec4899; /* Warna sekunder */
  --color-accent: #14b8a6; /* Warna aksen */
}
```

### Mengubah Font

Edit bagian Google Fonts di `index.html`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=NamaFont:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

Kemudian update di `css/style.css`:

```css
:root {
  --font-primary: "NamaFont", sans-serif;
}
```

## 📱 Responsive Design

Website ini fully responsive dengan breakpoint:

- **Desktop**: > 968px
- **Tablet**: 640px - 968px
- **Mobile**: < 640px

## ✨ Fitur Design

- ✅ Dark theme dengan gradient
- ✅ Glassmorphism effects
- ✅ Smooth animations
- ✅ Hover effects
- ✅ Scroll animations
- ✅ Counter animations
- ✅ Mobile-friendly navigation

## 📊 Database

Website menggunakan JSON sebagai database file-based:

- **services.json** - 3 layanan utama
- **portfolio.json** - 6 proyek portfolio
- **creators.json** - 6 content creator
- **contacts.json** - Form submissions (kosong)

## 🔧 Development

### Prerequisites

- Browser modern (Chrome, Firefox, Edge, Safari)
- Text editor (VS Code, Sublime, dll)

### Local Development

1. Clone atau download project
2. Buka `index.html` di browser
3. Edit file sesuai kebutuhan
4. Refresh browser untuk melihat perubahan

### Live Server (Optional)

Untuk development yang lebih baik, gunakan live server:

```bash
# Jika punya Python
python -m http.server 8000

# Jika punya Node.js
npx serve

# Atau gunakan VS Code Live Server extension
```

## 📝 Sections

1. **Hero** - Intro dengan CTA dan statistik
2. **Services** - 3 layanan utama
3. **Portfolio** - Showcase proyek dengan filter
4. **Creators** - Featured content creators
5. **About** - Tentang Arviel Studio
6. **Contact** - Form kontak dan info
7. **Footer** - Links dan social media

## 🎯 SEO

Website sudah dioptimasi untuk SEO:

- Meta tags lengkap
- Open Graph tags
- Semantic HTML
- Proper heading hierarchy
- Descriptive titles

## 📞 Kontak

- **Email**: hello@arvielstudio.com
- **Phone**: +62 812-3456-7890
- **Location**: Jakarta, Indonesia

## 📄 License

© 2024 Arviel Studio. All rights reserved.

---

**Dibuat dengan ❤️ oleh Arviel Studio**
