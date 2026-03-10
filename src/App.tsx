import { useState } from 'react'
import type { FormEvent } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import Card from './components/Card'
import Alert from './components/Alert'
import UIKit from './pages/UIKit'

type Page = 'portfolio' | 'uikit'

function App() {
  const [page, setPage] = useState<Page>('portfolio')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  function toggleDark() {
    document.documentElement.classList.toggle('dark')
  }

  function validate(): Record<string, string> {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Ad Soyad alani zorunludur.'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Ad Soyad en az 2 karakter olmalidir.'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'E-posta alani zorunludur.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Gecerli bir e-posta adresi giriniz.'
    }
    if (!formData.subject) {
      newErrors.subject = 'Lutfen bir konu seciniz.'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Mesaj alani zorunludur.'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mesaj en az 10 karakter olmalidir.'
    }
    return newErrors
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDark}
        className="fixed top-4 right-4 z-50
          bg-gray-200 dark:bg-gray-700
          text-gray-800 dark:text-gray-200
          p-2 rounded-full shadow-lg
          hover:scale-110 transition-transform"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only
          focus:absolute focus:top-0 focus:left-0
          bg-blue-800 text-white p-2 z-50"
      >
        Ana icerige atla
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3
          flex flex-col sm:flex-row
          justify-between items-center gap-3">
          <div className="text-center sm:text-left">
            <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
              Batuhan Yasar Ozkan
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Yazilim Muhendisligi Ogrencisi &amp; Full Stack Developer
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 tracking-wide">230541050</p>
          </div>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li>
                <button
                  onClick={() => setPage('portfolio')}
                  className={`px-3 py-1 rounded-md transition-colors font-medium
                    ${page === 'portfolio'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800'
                    }`}
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPage('uikit')}
                  className={`px-3 py-1 rounded-md transition-colors font-medium
                    ${page === 'uikit'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800'
                    }`}
                >
                  UI Kit
                </button>
              </li>
              {page === 'portfolio' && (
                <>
                  <li>
                    <a href="#hakkimda" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                      Hakkimda
                    </a>
                  </li>
                  <li>
                    <a href="#projeler" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                      Projeler
                    </a>
                  </li>
                  <li>
                    <a href="#iletisim" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                      Iletisim
                    </a>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>

      {page === 'uikit' ? (
        <UIKit />
      ) : (
        <main id="main-content">
          {/* Hakkimda Section */}
          <section id="hakkimda" className="py-12 sm:py-16 lg:py-20 px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
              <figure className="shrink-0">
                <img
                  src="https://ui-avatars.com/api/?name=Batuhan+Yasar+Ozkan&size=180&background=1E3A8A&color=ffffff&bold=true&format=svg"
                  alt="Batuhan Yasar Ozkan profil fotografi"
                  className="w-40 h-40 rounded-full object-cover shadow-lg"
                  width={180}
                  height={180}
                />
                <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">
                  Batuhan Yasar Ozkan
                </figcaption>
              </figure>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                  Hakkimda
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  Merhaba! Ben <strong>Batuhan Yasar Ozkan</strong> (230541050).{' '}
                  <strong>Firat Universitesi Yazilim Muhendisligi</strong> bolumunde 3. sinif
                  ogrencisiyim. Full Stack Development ve Yapay Zeka alanlarinda calismalar
                  yurutuyorum.
                </p>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Becerilerim</h3>
                <ul className="flex flex-wrap gap-2" role="list" aria-label="Beceri etiketleri">
                  {['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS'].map((skill) => (
                    <li key={skill} className="bg-blue-800 dark:bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Projelerim Section */}
          <section id="projeler" className="py-12 sm:py-16 lg:py-20 px-4 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
                Projelerim
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card variant="elevated" title="E-Ticaret Sitesi" image="/proje1.svg" imageAlt="E-Ticaret sitesi anasayfa ekran goruntusu">
                  <p>React ve Node.js ile gelistirilmis tam kapsamli bir e-ticaret uygulamasi.</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {['React', 'Node.js', 'MongoDB'].map((t) => (
                      <span key={t} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded text-xs">{t}</span>
                    ))}
                  </div>
                </Card>
                <Card variant="outlined" title="Blog Uygulamasi" image="/proje2.svg" imageAlt="Blog uygulamasi yazi listesi gorunumu">
                  <p>Kisisel blog platformu. Markdown destekli yazi editoru.</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {['TypeScript', 'Next.js'].map((t) => (
                      <span key={t} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded text-xs">{t}</span>
                    ))}
                  </div>
                </Card>
                <Card variant="filled" title="Hava Durumu" image="/proje3.svg" imageAlt="Hava durumu uygulamasi arayuzu">
                  <p>OpenWeather API ile anlik hava durumu bilgisi.</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {['JavaScript', 'API'].map((t) => (
                      <span key={t} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded text-xs">{t}</span>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Iletisim Section */}
          <section id="iletisim" className="py-12 sm:py-16 lg:py-20 px-4">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                Iletisim
              </h2>

              {submitted ? (
                <Alert variant="success" title="Basarili!">
                  Mesajiniz basariyla gonderildi. Tesekkur ederim!
                </Alert>
              ) : (
                <form noValidate onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    id="name"
                    label="Ad Soyad"
                    name="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                  />
                  <Input
                    id="email"
                    label="E-posta"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                  {/* Konu - select */}
                  <div className="space-y-1">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Konu
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      className={`w-full px-3 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2
                        dark:bg-gray-800 dark:text-gray-100
                        ${errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500 dark:border-gray-600'}`}
                    >
                      <option value="">-- Konu seciniz --</option>
                      <option value="is-birligi">Is Birligi Teklifi</option>
                      <option value="proje">Proje Hakkinda</option>
                      <option value="genel">Genel Soru</option>
                    </select>
                    {errors.subject && (
                      <p id="subject-error" role="alert" className="text-sm text-red-600 dark:text-red-400">
                        {errors.subject}
                      </p>
                    )}
                  </div>
                  {/* Mesaj - textarea */}
                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Mesajiniz
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`w-full px-3 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2
                        dark:bg-gray-800 dark:text-gray-100
                        ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500 dark:border-gray-600'}`}
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="text-sm text-red-600 dark:text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <Button variant="primary" size="lg" type="submit" className="w-full sm:w-auto">
                    Gonder
                  </Button>
                </form>
              )}
            </div>
          </section>
        </main>
      )}

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2026 Batuhan Yasar Ozkan &mdash; Firat Universitesi, Yazilim Muhendisligi</p>
      </footer>
    </div>
  )
}

export default App
