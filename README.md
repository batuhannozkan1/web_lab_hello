# Web Tasarimi ve Programlama - LAB Odevi

## Hakkinda

Bu proje, **Firat Universitesi Web Tasarimi ve Programlama** dersinin LAB-1 ve LAB-2 odevleri kapsaminda gelistirilmis kisisel portfolyo web uygulamasidir. Proje; semantik HTML5 yapisi, erisilebilirlik (a11y) standartlari, ARIA etiketleri ve dogru heading hiyerarsisi gibi modern web gelistirme pratiklerini uygulamayi amaclamaktadir.

## Gelistirici

- **Ad Soyad:** Batuhan Yasar Ozkan
- **Universite:** Firat Universitesi
- **Bolum:** Yazilim Muhendisligi, 3. Sinif

## Kullanilan Teknolojiler

- **React 19** - Kullanici arayuzu kutuphanesi
- **TypeScript** - Tip guvenli JavaScript
- **Vite** - Hizli gelistirme sunucusu ve build araci
- **HTML5 Semantik Etiketler** - `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **CSS3** - Erisilebilir ve responsive tasarim
- **ARIA** - Erisilebilirlik etiketleri ve rolleri

## Kurulum

```bash
# Depoyu klonla
git clone <repo-url>
cd web-lab-hello

# Bagimliliklari kur
npm install
```

## Calistirma

```bash
# Gelistirme sunucusunu baslat
npm run dev

# Uretim derlemesi olustur
npm run build

# Uretim derlemesini onizle
npm run preview
```

## Proje Yapisi

```
web-lab-hello/
├── public/             # Statik dosyalar
├── src/
│   ├── App.tsx         # Ana uygulama bileseni (semantik yapi)
│   ├── App.css         # Uygulama stilleri
│   ├── index.css       # Global CSS sifirlama
│   └── main.tsx        # React giris noktasi
├── index.html          # HTML sablonu (lang="tr")
├── package.json        # Proje bagimliliklari ve betikleri
├── tsconfig.json       # TypeScript yapilandirmasi
├── vite.config.ts      # Vite yapilandirmasi
└── README.md           # Bu dosya
```

## Erisilebilirlik Ozellikleri

- Skip Navigation (Ana icerigi atla) baglantisi
- Dogru heading hiyerarsisi (h1 > h2 > h3)
- Tum form elemanlarinda eslesen `<label>` etiketleri
- ARIA rolleri ve `aria-describedby` hata mesajlari
- Belirgin focus gostergeleri (outline)
- Yeterli renk kontrasti (WCAG AA, 4.5:1 oran)
