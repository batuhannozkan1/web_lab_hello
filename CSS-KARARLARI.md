# CSS Kararlari

## 1. Breakpoint Secimi

- **Neden 640px ve 1024px sectim?**
  640px, cogu telefonun yatay modunu ve kucuk tabletleri kapsayan dogal bir kirilma noktasidir. 1024px ise tabletlerin yatay modu ve kucuk masaustu ekranlarinin basladigi noktadir. Bu iki deger, icerige gore belirlenip mobil/tablet/masaustu arasinda temiz gecisler saglar.

- **Icerigim bu noktalarda nasil degisiyor?**
  Mobilde (0-639px) her sey tek sutun, nav dikey yiginlir. Tablette (640px+) header yatay olur, hakkimda bolumu yan yana gelir. Masaustunde (1024px+) icerik 1200px ile sinirlanir, proje kartlari 3 sutun olur.

## 2. Layout Tercihleri

- **Header icin neden Flexbox sectim?**
  Header tek eksen uzerinde logo/baslik solda, navigasyon sagda seklinde hizalama gerektiriyor. Flexbox tek boyutlu bu duzeni `justify-content: space-between` ile kolayca cozer.

- **Proje kartlari icin neden Grid sectim?**
  Proje kartlari satir ve sutun boyunca iki boyutlu bir izgara olusturur. CSS Grid, `repeat(auto-fit, minmax(280px, 1fr))` ile media query yazmadan otomatik responsive sutun sayisi saglar.

- **auto-fit mi auto-fill mi kullandim, neden?**
  `auto-fit` kullandim cunku bos sutun varsa mevcut kartlar genisleyerek alani doldurur. `auto-fill` bos sutunlari korur, bu da az kartla gereksiz bosluk yaratir.

## 3. Design Tokens

- **Hangi renk paletini sectim ve neden?**
  Birincil renk olarak koyu mavi (#1E3A8A) profesyonel ve guvenilir bir his verir. Ikincil renk (#2563EB) daha canli bir mavi ile etkilesimli elemanlari vurgular. Vurgu rengi (#7C3AED) mor ile ozel detaylari one cikarir.

- **Spacing skalasini nasil belirledim?**
  4px temelli bir olcek (0.25rem, 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem) kullandim. Bu tutarli bir gorsel ritim saglar ve "bu bosluk 17px mi 20px mi?" sorusunu ortadan kaldirir.

- **Fluid typography icin clamp degerlerini nasil ayarladim?**
  Her font boyutu icin minimum (rem), tercih edilen (rem + vw karisimlari) ve maksimum (rem) degerler belirledim. Ornegin `--text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem)` dar ekranda 16px'den kuculmuyor, genis ekranda 18px'i gecmiyor. rem+vw karisimi sayesinde zoom yapildiginda da erisilebilirlik bozulmuyor.

## 4. Responsive Stratejiler

- **Mobile-first yaklasimini nasil uyguladim?**
  Tum temel stiller mobil icin yazildi (tek sutun, dikey nav, tam genislik elemanlar). Sonra `min-width` media query'leri ile buyuk ekranlar icin ekleme yapildi. Bu yaklasim performans acisindan avantajli cunku mobil cihazlar sadece temel CSS'i yukler.

- **Hangi elemanlar breakpoint'lerde degisiyor?**
  Header: mobilde dikey → tablette yatay. Nav: mobilde tam genislik dikey → tablette yatay. Hakkimda: mobilde usten alta → tablette yan yana. Proje kartlari: grid auto-fit ile otomatik 1→2→3 sutun. Form butonu: mobilde tam genislik → tablette otomatik genislik.

- **Gorsel boyutlari nasil yonettim?**
  Tum gorseller `max-width: 100%` ve `height: auto` ile kapsayicilarina uyum saglar. Proje kart gorselleri `object-fit: cover` ile sabit yukseklikte (200px) orantili kirpilir, boylece farkli boyutlu gorseller bile duzgun gorunur.
