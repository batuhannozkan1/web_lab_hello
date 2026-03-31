import Button from '../components/Button'
import Input from '../components/Input'
import Card from '../components/Card'
import Alert from '../components/Alert'

export default function UIKit() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-4 sm:p-8 space-y-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          UI Kit
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Tum bilesenlerin varyantlari tek sayfada sergilenmektedir.
        </p>

        {/* --- BUTTONS --- */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
            Buttons
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">4 renk varyanti: primary, secondary, danger, ghost</p>
          {/* Varyant 1-4: Renk varyantlari */}
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">3 boyut varyanti: sm, md, lg</p>
          {/* Varyant 5: Boyut varyantlari */}
          <div className="flex flex-wrap items-end gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Disabled durumu</p>
          {/* Varyant 6: Disabled */}
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" disabled className="opacity-50 cursor-not-allowed pointer-events-none">
              Disabled Primary
            </Button>
            <Button variant="danger" disabled className="opacity-50 cursor-not-allowed pointer-events-none">
              Disabled Danger
            </Button>
          </div>
        </section>

        {/* --- INPUTS --- */}
        <section className="space-y-4 max-w-md">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
            Inputs
          </h2>
          {/* Varyant 7: Normal */}
          <Input id="ui-name" label="Normal Input" placeholder="Bir sey yazin..." />
          {/* Varyant 8: Hatali */}
          <Input id="ui-err" label="Hatali Input" error="Bu alan zorunludur" />
          {/* Varyant 9: Help text */}
          <Input id="ui-help" label="Help Text" type="email" helpText="E-posta adresinizi girin" />
          {/* Varyant 10: Disabled */}
          <Input id="ui-dis" label="Disabled" disabled value="Duzenlenemez" />
        </section>

        {/* --- CARDS --- */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
            Cards
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">3 stil varyanti: elevated, outlined, filled</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Varyant 11: Elevated */}
            <Card variant="elevated" title="Elevated Card">
              <p>Golge ile yukseltilmis kart. Hover ile golge buyur.</p>
            </Card>
            {/* Varyant 12: Outlined */}
            <Card variant="outlined" title="Outlined Card">
              <p>Cerceveli kart. Ince border ile tanimlanir.</p>
            </Card>
            {/* Varyant 13: Filled */}
            <Card variant="filled" title="Filled Card" footer={<Button size="sm">Detay</Button>}>
              <p>Dolgulu arka plan. Footer ile birlikte kullanim.</p>
            </Card>
          </div>
        </section>

        {/* --- ALERTS --- */}
        <section className="space-y-4 max-w-xl">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
            Alerts
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">4 renk varyanti: info, success, warning, error</p>
          {/* Varyant 14: Info */}
          <Alert variant="info" title="Bilgi">
            Bilgilendirme mesaji.
          </Alert>
          {/* Varyant 15: Success */}
          <Alert variant="success" title="Basarili">
            Islem tamamlandi.
          </Alert>
          {/* Varyant 16: Warning */}
          <Alert variant="warning" title="Uyari">
            Dikkat edilmesi gereken durum.
          </Alert>
          {/* Varyant 17: Error + Dismissible */}
          <Alert variant="error" title="Hata" dismissible>
            Bir hata olustu. Kapat butonuna tiklayarak kapatabilirsiniz.
          </Alert>
        </section>

        {/* --- RESPONSIVE DEMO --- */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
            Responsive Layout Demo
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            sm: / md: / lg: prefix'leri ile responsive tasarim. Ekran boyutunu degistirerek test edin.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <aside className="w-full lg:w-1/3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Sidebar</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Mobilde tam genislik, masaustunde 1/3 genislik.
              </p>
            </aside>
            <main className="flex-1 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Ana Icerik</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Kalan alani kaplar. md:flex-row ile tabletten itibaren yatay dizilir.
              </p>
            </main>
          </div>
          {/* Responsive text size demo */}
          <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300">
            Bu metin mobilde kucuk (text-sm), tablette orta (md:text-base), masaustunde buyuk (lg:text-lg) gosterilir.
          </p>
        </section>

        {/* --- TYPOGRAPHY & SPACING --- */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
            Typography
          </h2>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-gray-900 dark:text-gray-100">Heading 4xl Bold</p>
            <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Heading 2xl Semibold</p>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Text lg Medium</p>
            <p className="text-base text-gray-600 dark:text-gray-400">Text base - Normal paragraf metni.</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">Text sm - Kucuk aciklama metni.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
