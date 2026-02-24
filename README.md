# Web Tasarımı ve Programlama - LAB Ödevi

## Hakkında

Bu proje, **Fırat Üniversitesi Web Tasarımı ve Programlama** dersinin LAB-1 ve LAB-2 ödevleri kapsamında geliştirilmiş kişisel portföy web uygulamasıdır. Proje; semantik HTML5 yapısı, erişilebilirlik (a11y) standartları, ARIA etiketleri ve doğru heading hiyerarşisi gibi modern web geliştirme pratiklerini uygulamayı amaçlamaktadır.

## Geliştirici

- **Ad Soyad:** Batuhan Yaşar Özkan
- **Üniversite:** Fırat Üniversitesi
- **Bölüm:** Yazılım Mühendisliği, 3. Sınıf

## Kullanılan Teknolojiler

- **React 19** - Kullanıcı arayüzü kütüphanesi
- **TypeScript** - Tip güvenli JavaScript
- **Vite** - Hızlı geliştirme sunucusu ve build aracı
- **HTML5 Semantik Etiketler** - `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **CSS3** - Erişilebilir ve responsive tasarım
- **ARIA** - Erişilebilirlik etiketleri ve rolleri

## Kurulum

```bash
# Depoyu klonla
git clone <repo-url>
cd web-lab-hello

# Bağımlılıkları kur
npm install
```

## Çalıştırma

```bash
# Geliştirme sunucusunu başlat
npm run dev

# Üretim derlemesi oluştur
npm run build

# Üretim derlemesini önizle
npm run preview
```

## Proje Yapısı

```
web-lab-hello/
├── public/             # Statik dosyalar
├── src/
│   ├── App.tsx         # Ana uygulama bileşeni (semantik yapı)
│   ├── App.css         # Uygulama stilleri
│   ├── index.css       # Global CSS sıfırlama
│   └── main.tsx        # React giriş noktası
├── index.html          # HTML şablonu (lang="tr")
├── package.json        # Proje bağımlılıkları ve betikleri
├── tsconfig.json       # TypeScript yapılandırması
├── vite.config.ts      # Vite yapılandırması
└── README.md           # Bu dosya
```

## Erişilebilirlik Özellikleri

- Skip Navigation (Ana içeriğe atla) bağlantısı
- Doğru heading hiyerarşisi (h1 > h2 > h3)
- Tüm form elemanlarında eşleşen `<label>` etiketleri
- ARIA rolleri ve `aria-describedby` hata mesajları
- Belirgin focus göstergeleri (outline)
- Yeterli renk kontrastı (WCAG AA, 4.5:1 oran)
